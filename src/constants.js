export const routes = {
  home: '/',
  // course
  courses: '/courses',
  coursePaymentSuccessful: '/courses/paymentsucessful', // this should be declared before courseDetail or "paymentsucessful" will become the id param
  courseOrder: '/courses/order/:id', // this should be declared before courseDetail or "order" will become the id param
  courseDetail: '/courses/:id',
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

export const toastDuration = 3000;
