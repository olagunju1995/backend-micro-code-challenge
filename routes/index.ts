
import influencersRoute from "./influencers_routes";



const router = app => {
  app.use('/api/v1/influencers', influencersRoute);
};

export default router;
