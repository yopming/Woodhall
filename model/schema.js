var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var salt = 'tincoparmacalmaquesse';


// specific model
var userSchema = new Schema({
  workno   : {type: Number, unique: true},
  name     : String,
  username : {type: String, unique: true},
  email    : {type: String, unique: true},
  hash     : String,
  created  : {type: Date, default: Date.now}
});
mongoose.model('User', userSchema);


// task include: project, mail, topic, etc.
var taskSchema = new Schema ({
  category          : String,
  program           : {type: Schema.Types.ObjectId, ref: 'Program'},
  name              : {type: String, unique: true},
  personnel_fe      : {type: Schema.Types.ObjectId, ref: 'Personnel'},
  personnel_ga      : {type: Schema.Types.ObjectId, ref: 'Personnel'},
  personnel_ia      : {type: Schema.Types.ObjectId, ref: 'Personnel'},
  personnel_pd      : {type: Schema.Types.ObjectId, ref: 'Personnel'},
  jira_uri          : String,
  ix_uri            : String,
  gandolf_uri       : String,
  topic_cover       : String,
  mail_cover        : String,
  topic_deploy_uri  : String,
  topic_graphic_uri : String,
  mail_graphic_uri  : String,
  belong_to         : {type: Schema.Types.ObjectId, ref: 'ReleasePipe'},
  //related_version   : {type: Schema.Types.ObjectId, ref: 'ProjectVersion'},
  related_version   : String,
  head_image        : String,
  start_time        : String,
  end_time          : String,
  created           : {type: Date, default: Date.now}
});
mongoose.model('Task', taskSchema);


/* position,i.e. job type
 * @example: frontend, graphic, interactive...
 */
var positionSchema = new Schema({
  name: {type: String, unique: true}
});
mongoose.model('Position', positionSchema);


/* personnel list
 * @example: specific personnel
 */
var personnelSchema = new Schema({
  workno         : {type: Number, unique: true},
  name           : String,
  domain_account : {type: String, unique: true},
  position       : {type: mongoose.Schema.Types.ObjectId, ref: 'Position'}
});
mongoose.model('Personnel', personnelSchema);


/* program
 * @example: official, channel...
 */
var programSchema = new Schema({
  name: {type: String, unique: true}
});
mongoose.model('Program', programSchema);



/* project version
 * @example: 2013.48, 2014.08
 */
var projectVersionSchema = new Schema({
  name: {type: String, unique: true}
});
mongoose.model('ProjectVersion', projectVersionSchema);


/* release pipe
 * @example: CMS, version, CST
 */
var releasePipeSchema = new Schema({
  name: {type: String, unique: true}
});
mongoose.model('ReleasePipe', releasePipeSchema);


// connect
// mongoose.connect('mongodb://192.168.28.107/sam');
mongoose.connect('mongodb://127.0.0.1/sam');

