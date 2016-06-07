import Ember from 'ember';

// export function stringSafe(params/*, hash*/) {
//   let value = Ember.Handlebars.Utils.escapeExpression(params[0]);
//   return Ember.String.htmlSafe(${value});
// }

export default Ember.Helper.helper(function (params) {
  // let value = Ember.Handlebars.Utils.escapeExpression(params[0]);
  // return Ember.String.htmlSafe(`${value}`);
  return Ember.String.htmlSafe(`${params[0]}`);
});
