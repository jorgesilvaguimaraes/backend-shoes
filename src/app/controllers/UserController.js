import User from '../models/User';

class UserController {
  //   async index(req, res) {
  //     return await res.json({ msg: 'index' });
  //   }

  async store(req, res) {
    const userExist = await User.findOne({ where: { email: req.body.email } });

    if (userExist) {
      return res.status(401).json({
        error: `Email ${userExist.email} já cadastrado na base para o usuário ${userExist.name}`,
      });
    }

    const user = await User.create(req.body);

    return await res.json(user);
  }

  //   async show(req, res) {
  //     return await res.json({ msg: 'show' });
  //   }

  //   async update(req, res) {
  //     return await res.json({ msg: 'update' });
  //   }

  //   async delete(req, res) {
  //     return await res.json({ msg: 'delete' });
  //   }
}

export default new UserController();
