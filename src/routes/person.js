import express from 'express';
import {
  getAll,
  createOne,
  findById,
  queryFilterSort,
  deleteById,
  postImage,
  register,
} from '../controllers/person';
import Logger from '../utils/logger';

const router = new express.Router();
const logger = new Logger('Routes', 'person.js');

/*
Postman GET request
http://localhost:4444/person?age[lte]=50
http://localhost:4444/person?age[gte]=50
http://localhost:4444/person?sort=age
*/

router.get('/', async (req, res) => {
  logger.debug('Person GET All');
  // Call my person controller and get all persons!!
  try {
    const keys = Object.keys(req.query);
    if (keys.length) {
      logger.silly(JSON.stringify(req.query, null, 2));
      const result = await queryFilterSort(req.query);
      res.end(JSON.stringify(result, null, 2));
      return;
    }
    logger.info(JSON.stringify(req.query));
    const persons = await getAll();
    res.end(JSON.stringify(persons, null, 2));
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      error: err,
    });
  }
});

/*
Postman POST request
http://localhost:4444/person  (application/json)

{
  "name": "Jon",
  "age": 55,
}

Create one person's data
*/
router.post('/', async (req, res) => {
  try {
    const data = req.user;
    logger.info(JSON.stringify(data, null, 2));
    await createOne(data);
    res.end(JSON.stringify({ status: 'ok' }));
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      error: err,
    });
  }
});

/*
Postman POST request
http://localhost:4444/person/5e9c642772/image  (form-data)

key=pic (Type=file)
value = Select file from dialog

Upload one person's image
*/
router.route('/:id/image').post(async (req, res) => {
  const { id } = req.params;
  const files = [];
  const arr = Object.entries(req.files);
  for (const [k, v] of arr) {
    const data = v.data && Buffer.from(v.data).toString('base64');
    files.push({
      id,
      name: v.name,
      data,
    });
  }

  const firstImg = files.length && files[0];
  try {
    await postImage(id, firstImg.data);

    res.json({ ok: true, img: firstImg.data });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

/*
Postman GET request
http://localhost:4444/person/5e9c642772

Get one person's detail
*/
router
  .route('/:id')
  .get(async (req, res) => {
    try {
      logger.info(req.params.id);
      const result = await findById(req.params.id);
      res.end(JSON.stringify(result, null, 2));
    } catch (err) {
      res.end(JSON.stringify(err));
    }
  })
  .delete(async (req, res) => {
    await deleteById(req.params.id);
    res.end(JSON.stringify({ status: 'deleted' }, null, 2));
  });


export default router;
