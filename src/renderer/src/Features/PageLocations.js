export default {
    Login: () => import('@renderer/Pages/Login'),
    Dashboard:()=>import('@renderer/Pages/Dashboard'),
    Tasks:()=>import('@renderer/Features/tasks/Tasks'),
    Notifications:()=>import('@renderer/Features/notifications/Notifications'),
  };