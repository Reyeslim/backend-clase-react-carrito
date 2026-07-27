import * as authService from '../services/auth.service.js';

export async function registerController(req, res, next) {
  try {
    const user = await authService.register(req.body.email, req.body.password);
    res.status(201).json({
      ok: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
}

export async function loginController(req, res, next) {
  try {
    const data = await authService.login(req.body.email, req.body.password);
    res.json({
      ok: true,
      data,
    });
  } catch (error) {
    next(error);
  }
}

export async function meController(req, res, next) {
  try {
    const user = await authService.getMe(req.user.id);
    res.json({
      ok: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
}
