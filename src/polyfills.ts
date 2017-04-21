import 'core-js/es6';
import 'core-js/es7/reflect';

if (process.env.ENV === 'production') {
  // Production
  require('zone.js/dist/zone');
} else {
  // Development and test
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}