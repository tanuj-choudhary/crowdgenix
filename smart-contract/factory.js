import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xc0429C9299CB7959087b8F548044fB348F39947e"
);

export default instance;
