export const routes = {
  home: '/',
  sendContactSuccessful: '/send-contact-successful',
  // course
  courses: '/courses',
  coursePaymentSuccessful: '/courses/payment/:status', // this should be declared before courseDetail or "paymentsucessful" will become the id param
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
  accountDeposit: '/account/deposit',
  accountDepositNoti: '/account/profile/deposit-noti/:code/:amount',
  // misc
  contact: '/contact',
};

export const toastDuration = 3000;

export const keys = {
  // google key
  googleRecaptchaSiteKey: '6LfkxsAUAAAAABCC_nnWUKz-0OhBcio0H0rtInIH',
};
