// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.


const resolvers = {

    Query: {
        getUser(parent, args, context) {
          return context.models.User.findOne({where: args.id});
        },
        allUsers(parent,args, context){
            return context.models.User.findAll()
        }
      },
    Mutation:{
        createUser(parent, args, context){
            return context.models.User.create(args)
        },
        createTeam: async (parent, args, {models, user}) => {
            try{
                await models.Team.create({...args, owner:user.id});
                return true;
            }catch(err){
                console.log(err);
                return false;
            }
        },
    createChannel : async (parent, args, context)=>{ 
        try{
            await context.models.Channel.create(args);
            return true   ;  
        }catch(err){
            console.log(err);
            return false;
        }
    },

    createMessage : async (parent, args, {models, user})=>{
        try{
            await models.Message.create({...args, userId: user.id});
            return true;
        }catch(err){
            console.log(err);
            return false;
        }
        
    }
    },
  }

module.exports = resolvers