// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from '../../database/models';
 async function getAll(){
  try{
    const user =  await User.findAll();
    return user;
  } catch (e) {
    console.log(e);
  }
}

async function getById(id){
  try{
    const user =  await User.findByPk(id);
    return user
    
  } catch (e) {
    console.log(e);
  }
}

async function create(body){
  try{
    const user =  await User.create({
      name: body.name,
      email: body.email,
    });
    return user;
  } catch (e) {

  }
}

export default async function handler(req, res) {
  if(req.method === 'GET'){
    if (req.query.id) {
      const user = await getById(req.query.id);
      res.status(200).json(user);
      return;
    }
    const user = await getAll();
    res.status(200).json(user);
  } else if(req.method === 'POST'){
    const data = await create(req.body);
    res.status(200).json(data);


  }}
