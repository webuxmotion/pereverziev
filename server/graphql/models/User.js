class User {

  constructor(model) {
    this.Model = model;
  }

  getAuthUser(ctx) {
    if (ctx.isAuthenticated()) {
      return ctx.getUser();
    }

    return null;
  }

  async signUp(signUpData) {
    if (signUpData.password !== signUpData.passwordConfirmation) {
      throw new Error('Password must be the same as confirmation password!');
    }

    try {
      return (await this.Model.create(signUpData))._id;
    } catch (error) {
      if (error.code && error.code === 11000) {
        throw new Error(`Email: ${signUpData.email} already exists`);
      }
      
      throw error;
    }
  }

  async signIn(signInData, ctx) {
    try {
      const user = await ctx.authenticate(signInData);
      return user;
    } catch(error) {
      return error;
    }
  }
}

module.exports = User;
