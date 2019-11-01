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
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExist = await User.findOne({ where: { email } });
      if (userExist) {
        return res.status(400).json({ error: 'Usuário com email já existe' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Senha não confere' });
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({ id, name, email, provider });
  }

  //   async delete(req, res) {
  //     return await res.json({ msg: 'delete' });
  //   }
}

export default new UserController();
