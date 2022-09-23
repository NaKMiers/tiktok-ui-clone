import * as request from '../utils/request'

export const search = async (q, type = 'less') => {
   try {
      const res = await request.get('users')

      return res
      // return res.dada
   } catch (err) {
      console.log(err)
   }
}
