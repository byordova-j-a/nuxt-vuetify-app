const pathList = [
  '/journal',
  '/list',
  '/control',
  '/position',
  '/timetable',
  '/admin',
  '/settings',
];

export default defineNuxtRouteMiddleware((to) => {
  if (!pathList.includes(to.path)) {
    return navigateTo('/list');
  }

});

