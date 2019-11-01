export const routes = {
  home: '/',
  // course
  courses: '/courses',
  courseOrder: '/courses/order/:id', // this should be declared before courseDetail or "order" will become the id param
  courseDetail: '/courses/:id',
  coursePaymentSuccessful: '/courses/paymentsucessful',
  // auth
  signin: '/signin',
  verify: '/verify',
  registerPendingActive: '/register-pending-active',
  // account
  accountDashboard: '/account/dashboard',
  accountProfile: '/account/profile',
  accountWallet: '/account/profile/wallet',
  accountWithdraw: '/account/profile/withdraw',
  accountWithdrawNoti: '/account/profile/withdraw-noti',
  accountCourses: '/account/courses',
  // misc
  contact: '/contact',
};
