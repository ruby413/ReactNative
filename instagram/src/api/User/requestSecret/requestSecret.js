import { prisma } from "../../../../generated/prisma-client";
import { generateSecret } from "../../../../utils";

export default {
  Mutation: {
    requestSecret: async (_, args) => {
      const { email } = args;
      const loginSecret = generateSecret();
      console.log(loginSecret);
      try {
        await prisma.updateUser({ data: { loginSecret }, where: { email } });
        return true
      } catch (error){
        console.log(error)
        return false
      }
    }
  }
};
