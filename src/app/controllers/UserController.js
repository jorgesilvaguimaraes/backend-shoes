import User from '../models/User';

class UserController {
  //   async index(req, res) {
  //     return await res.json({ msg: 'index' });
  //   }

  async store(req, res) {
    const userExist = await User.findOne({ where: { email: req.body.email } });

    if (userExist) {
      return res.status(400).json({
        error: `Usuário já existe`,
      });
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({ id, name, email, provider });
  }

  //   async show(req, res) {
  //     return await res.json({ msg: 'show' });
  //   }

  async update(req, res) {
    return await res.json({ msg: `usuário logado id: ${req.userId}` });
  }

  //   async delete(req, res) {
  //     return await res.json({ msg: 'delete' });
  //   }
}

export default new UserController();
