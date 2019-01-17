export const state = () => ({
  isUserLoggedIn: true,
  name: "Tyler O'Briant",
  username: 'tob',
  description: '',
  uiColor: '',
  hasNotifications: false,
  profilePicture: "https://media.licdn.com/dms/image/C5603AQHR9b4T-gMdDA/profile-displayphoto-shrink_200_200/0?e=1552521600&v=beta&t=OCqWMbZEViWI0AEtPBdiA0-VlrUFfC-wJCR900OQaBE",
  subscriptions: [
    {name: "Aceable", pictureURL: 'aaa', projectId: "1111", numSubs: 1000},
    {name: "ExNI", pictureURL: 'bbb', communityId: "2222", numSubs: 10},
  ],
  owned: [
    {name: "kowalla", pictureURL: 'aaa', projectId: "1111", numSubs: 1000},
    {name: "EarlyAdopters", pictureURL: 'bbb', communityId: "2222", numSubs: 10},
  ]
});

/* from the sub model
  profileId
  projectId
  communityId
*/

/* sub array object expectation
  name,
  numSubs,
  pictureURLs,
  projectId,
  communityId,
*/
