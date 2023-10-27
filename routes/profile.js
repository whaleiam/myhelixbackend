var express = require("express");
var router = express.Router();
const ProfileController = require("../controllers/profile");

router.get("/getAllTagNotifications", ProfileController.getAllTagNotifications);
router.get("/getProfile/:proid", ProfileController.getProfile);
router.get("/getNumFollowers/:proid", ProfileController.getNumFollowers);
router.get("/getNumFollowing/:proid", ProfileController.getNumFollowing);
router.get("/getAllFollowers/:proid", ProfileController.getAllFollowers);
router.get("/getAllFollowing/:proid", ProfileController.getAllFollowing);
router.get("/getFollowInfo/:proid", ProfileController.getFollowInfo);
router.get(
  "/getPageOwnerProfiles/:proid",
  ProfileController.getPageOwnerProfiles
);
router.get("/isFollower/:follower/:followee", ProfileController.isFollower);
router.get("/getNumFriends/:proid", ProfileController.getNumFriends);
router.get(
  "/getIncomingRequests/:proid",
  ProfileController.getIncomingRequests
);
router.get(
  "/getOutgoingRequests/:proid",
  ProfileController.getOutgoingRequests
);

router.patch("/editProfile", ProfileController.setProfileInfo);
router.patch("/followProfile", ProfileController.followProfile);
router.patch("/unfollowProfile", ProfileController.unfollowProfile);
router.patch("/withdrawRequest", ProfileController.withdrawRequest);
router.patch("/sendRequest", ProfileController.sendRequest);
router.patch("/unfriendProfile", ProfileController.unfriendProfile);
router.patch("/acceptDenyRequest", ProfileController.acceptDenyRequest);
router.post("/newPage", ProfileController.createNewPage);

router.get("/getCategories", ProfileController.getCategories);

router.get("/getProfessional", ProfileController.getProfessional);
router.get("/getPersonal", ProfileController.getPersonal);

router.get("/getConversations/:proid", ProfileController.getConversations);

router.get("/getProfileID/:displayedName", ProfileController.getProfileID);
router.get("/getProfileIDs", ProfileController.getProfileIDs);

router.patch("/updateUnreadCount", ProfileController.updateUnreadCount);
router.get("/getUnreadMessageCount/:proid", ProfileController.getUnreadMessageCount);

module.exports = router;