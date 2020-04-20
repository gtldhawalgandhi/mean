import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Person from '../models/person';
import Logger from '../utils/logger';

const logger = new Logger('Controller', 'person.js');

export const getAll = async () => {
  try {
    return await Person.find();
  } catch (err) {
    throw new Error(`getAll Err: ${err}`);
  }
};

export const createOne = async (data) => {
  try {
    await Person.create(data);
  } catch (err) {
    throw new Error(`createOne Err: ${err}`);
  }
};

export const findByEmail = async (email) => {
  try {
    return await Person.find(email);
  } catch (err) {
    throw new Error(`findByEmail Err: ${err}`);
  }
};

export const findById = async (id) => {
  try {
    return await Person.findById(id);
  } catch (err) {
    throw new Error(`findById Err: ${err}`);
  }
};

export const deleteById = async (id) => {
  try {
    return await Person.findByIdAndDelete(id, { active: false });
  } catch (err) {
    throw new Error(`deleteById Err: ${err}`);
  }
};

export const queryFilterSort = async (q) => {
  // Copy the object
  const queryCopyObj = { ...q };

  // If the filter object contains sort first remove that
  delete queryCopyObj.sort;

  const queryStr = JSON.stringify(queryCopyObj);
  const replaceQueryStr = queryStr.replace(/\b(gt|lt|lte|gte)\b/g, (m) => `$${m}`);

  try {
    let query = Person.find(JSON.parse(replaceQueryStr));
    if (q.sort) {
      query = query.sort(q.sort);
    }
    return await query;
  } catch (err) {
    throw new Error(`getAll Err: ${err}`);
  }
};

export const postImage = async (id, img) => {
  try {
    return await Person.findByIdAndUpdate(id, { img });
  } catch (err) {
    throw new Error(`getAll Err: ${err}`);
  }
};

export const register = async (body) => {
  const data = { ...body };
  data.password = await bcrypt.hashSync(data.password, 10);
  await createOne(data);
};

export const login = async (body) => {
  const data = { ...body };
  try {
    const person = await findByEmail({ email: data.email });
    logger.info(data.password, person[0].password);
    const isAuth = await bcrypt.compareSync(data.password, person[0].password);
    if (isAuth) {
      return jwt.sign({ id: person.id }, 'serverSecretKey');
    }
    return false;
  } catch (err) {
    logger.error(err);
    return false;
  }
};
