"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ALL_ICONS_IN_ALL_CONTEXTS = exports.COMPONENT_CONTEXT_SPECIFIC_ICONS = exports.ICONS_AND_ALIASES = exports.ICON_ALIASES = exports.ICONS = exports.BRANDS = exports.WRITING = exports.VEHICLES = exports.USERS_PEOPLE = exports.STATUS = exports.SPORTS = exports.SPINNERS = exports.SHAPES = exports.PAYMENTS_SHOPPING = exports.OBJECTS = exports.MEDICAL = exports.MAPS = exports.LOGISTICS = exports.INTERFACES = exports.IMAGES = exports.HEALTH = exports.HANDS_GESTURES = exports.GENDERS = exports.FILES = exports.EDITORS = exports.DESIGN = exports.DATE_TIME = exports.CURRENCY = exports.COMPUTERS = exports.COMMUNICATION = exports.CODE = exports.CHESS = exports.BUSINESS = exports.AUDIO_VIDEO = exports.ARROWS = exports.ACCESSIBILITY = exports.TRANSITIONS = exports.STATIC_TRANSITIONS = exports.DIRECTIONAL_TRANSITIONS = exports.WIDTHS = exports.VISIBILITY = exports.VERTICAL_ALIGNMENTS = exports.TEXT_ALIGNMENTS = exports.SIZES = exports.FLOATS = exports.COLORS = void 0;

var _uniq2 = _interopRequireDefault(require("lodash/uniq"));

var _values2 = _interopRequireDefault(require("lodash/values"));

var _keys2 = _interopRequireDefault(require("lodash/keys"));

var _numberToWord = require("./numberToWord");

var COLORS = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
exports.COLORS = COLORS;
var FLOATS = ['left', 'right'];
exports.FLOATS = FLOATS;
var SIZES = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'];
exports.SIZES = SIZES;
var TEXT_ALIGNMENTS = ['left', 'center', 'right', 'justified'];
exports.TEXT_ALIGNMENTS = TEXT_ALIGNMENTS;
var VERTICAL_ALIGNMENTS = ['bottom', 'middle', 'top'];
exports.VERTICAL_ALIGNMENTS = VERTICAL_ALIGNMENTS;
var VISIBILITY = ['mobile', 'tablet', 'computer', 'large screen', 'widescreen'];
exports.VISIBILITY = VISIBILITY;
var WIDTHS = [].concat((0, _keys2.default)(_numberToWord.numberToWordMap), (0, _keys2.default)(_numberToWord.numberToWordMap).map(Number), (0, _values2.default)(_numberToWord.numberToWordMap));
exports.WIDTHS = WIDTHS;
var DIRECTIONAL_TRANSITIONS = ['browse', 'browse right', 'drop', 'fade', 'fade up', 'fade down', 'fade left', 'fade right', 'fly up', 'fly down', 'fly left', 'fly right', 'horizontal flip', 'vertical flip', 'scale', 'slide up', 'slide down', 'slide left', 'slide right', 'swing up', 'swing down', 'swing left', 'swing right', 'zoom'];
exports.DIRECTIONAL_TRANSITIONS = DIRECTIONAL_TRANSITIONS;
var STATIC_TRANSITIONS = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce', 'glow'];
exports.STATIC_TRANSITIONS = STATIC_TRANSITIONS;
var TRANSITIONS = [].concat(DIRECTIONAL_TRANSITIONS, STATIC_TRANSITIONS); // Generated from:
// https://github.com/Semantic-Org/Semantic-UI/blob/master/dist/components/icon.css

exports.TRANSITIONS = TRANSITIONS;
var ACCESSIBILITY = ['american sign language interpreting', 'assistive listening systems', 'audio description', 'blind', 'braille', 'closed captioning', 'closed captioning outline', 'deaf', 'low vision', 'phone volume', 'question circle', 'question circle outline', 'sign language', 'tty', 'universal access', 'wheelchair'];
exports.ACCESSIBILITY = ACCESSIBILITY;
var ARROWS = ['angle double down', 'angle double left', 'angle double right', 'angle double up', 'angle down', 'angle left', 'angle right', 'angle up', 'arrow alternate circle down', 'arrow alternate circle down outline', 'arrow alternate circle left', 'arrow alternate circle left outline', 'arrow alternate circle right', 'arrow alternate circle right outline', 'arrow alternate circle up', 'arrow alternate circle up outline', 'arrow circle down', 'arrow circle left', 'arrow circle right', 'arrow circle up', 'arrow down', 'arrow left', 'arrow right', 'arrow up', 'arrows alternate', 'arrows alternate horizontal', 'arrows alternate vertical', 'caret down', 'caret left', 'caret right', 'caret square down', 'caret square down outline', 'caret square left', 'caret square left outline', 'caret square right', 'caret square right outline', 'caret square up', 'caret square up outline', 'caret up', 'cart arrow down', 'chart line', 'chevron circle down', 'chevron circle left', 'chevron circle right', 'chevron circle up', 'chevron down', 'chevron left', 'chevron right', 'chevron up', 'cloud download', 'cloud upload', 'download', 'exchange', 'expand arrows alternate', 'external alternate', 'external square alternate', 'hand point down', 'hand point down outline', 'hand point left', 'hand point left outline', 'hand point right', 'hand point right outline', 'hand point up', 'hand point up outline', 'hand pointer', 'hand pointer outline', 'history', 'level down alternate', 'level up alternate', 'location arrow', 'long arrow alternate down', 'long arrow alternate left', 'long arrow alternate right', 'long arrow alternate up', 'mouse pointer', 'play', 'random', 'recycle', 'redo', 'redo alternate', 'reply', 'reply all', 'retweet', 'share', 'share square', 'share square outline', 'sign-in', 'sign-out', 'sign-in alternate', 'sign-out alternate', 'sort', 'sort alphabet down', 'sort alphabet up', 'sort amount down', 'sort amount up', 'sort down', 'sort numeric down', 'sort numeric up', 'sort up', 'sync', 'sync alternate', 'text height', 'text width', 'undo', 'undo alternate', 'upload', 'zoom-in', 'zoom-out'];
exports.ARROWS = ARROWS;
var AUDIO_VIDEO = ['audio description', 'backward', 'circle', 'circle outline', 'closed captioning', 'closed captioning outline', 'compress', 'eject', 'expand', 'expand arrows alternate', 'fast backward', 'fast forward', 'file audio', 'file audio outline', 'file video', 'file video outline', 'film', 'forward', 'headphones', 'microphone', 'microphone slash', 'music', 'pause', 'pause circle', 'pause circle outline', 'phone volume', 'play', 'play circle', 'play circle outline', 'podcast', 'random', 'redo', 'redo alternate', 'rss', 'rss square', 'step backward', 'step forward', 'stop', 'stop circle', 'stop circle outline', 'sync', 'sync alternate', 'undo', 'undo alternate', 'video', 'volume down', 'volume off', 'volume up'];
exports.AUDIO_VIDEO = AUDIO_VIDEO;
var BUSINESS = ['address book', 'address book outline', 'address card', 'address card outline', 'archive', 'balance scale', 'birthday cake', 'book', 'briefcase', 'building', 'building outline', 'bullhorn', 'bullseye', 'calculator', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'certificate', 'chart area', 'chart bar', 'chart bar outline', 'chart line', 'chart pie', 'clipboard', 'clipboard outline', 'coffee', 'columns', 'compass', 'compass outline', 'copy', 'copy outline', 'copyright', 'copyright outline', 'cut', 'edit', 'edit outline', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'envelope square', 'eraser', 'fax', 'file', 'file outline', 'file alternate', 'file alternate outline', 'folder', 'folder outline', 'folder open', 'folder open outline', 'globe', 'industry', 'paperclip', 'paste', 'pen square', 'pencil alternate', 'percent', 'phone', 'phone square', 'phone volume', 'registered', 'registered outline', 'save', 'save outline', 'sitemap', 'sticky note', 'sticky note outline', 'suitcase', 'table', 'tag', 'tags', 'tasks', 'thumbtack', 'trademark'];
exports.BUSINESS = BUSINESS;
var CHESS = ['chess', 'chess bishop', 'chess board', 'chess king', 'chess knight', 'chess pawn', 'chess queen', 'chess rook', 'square full'];
exports.CHESS = CHESS;
var CODE = ['archive', 'barcode', 'bath', 'bug', 'code', 'code branch', 'coffee', 'file', 'file outline', 'file alternate', 'file alternate outline', 'file code', 'file code outline', 'filter', 'fire extinguisher', 'folder', 'folder outline', 'folder open', 'folder open outline', 'keyboard', 'keyboard outline', 'microchip', 'qrcode', 'shield alternate', 'sitemap', 'terminal', 'user secret', 'window close', 'window close outline', 'window maximize', 'window maximize outline', 'window minimize', 'window minimize outline', 'window restore', 'window restore outline'];
exports.CODE = CODE;
var COMMUNICATION = ['address book', 'address book outline', 'address card', 'address card outline', 'american sign language interpreting', 'assistive listening systems', 'at', 'bell', 'bell outline', 'bell slash', 'bell slash outline', 'bullhorn', 'comment', 'comment outline', 'comment alternate', 'comment alternate outline', 'comments', 'comments outline', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'envelope square', 'fax', 'inbox', 'language', 'microphone', 'microphone slash', 'mobile', 'mobile alternate', 'paper plane', 'paper plane outline', 'phone', 'phone square', 'phone volume', 'rss', 'rss square', 'tty', 'wifi'];
exports.COMMUNICATION = COMMUNICATION;
var COMPUTERS = ['desktop', 'download', 'hdd', 'hdd outline', 'headphones', 'keyboard', 'keyboard outline', 'laptop', 'microchip', 'mobile', 'mobile alternate', 'plug', 'power off', 'print', 'save', 'save outline', 'server', 'tablet', 'tablet alternate', 'tv', 'upload'];
exports.COMPUTERS = COMPUTERS;
var CURRENCY = ['dollar sign', 'euro sign', 'lira sign', 'money bill alternate', 'money bill alternate outline', 'pound sign', 'ruble sign', 'rupee sign', 'shekel sign', 'won sign', 'yen sign'];
exports.CURRENCY = CURRENCY;
var DATE_TIME = ['bell', 'bell outline', 'bell slash', 'bell slash outline', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'calendar check', 'calendar check outline', 'calendar minus', 'calendar minus outline', 'calendar plus', 'calendar plus outline', 'calendar times', 'calendar times outline', 'clock', 'clock outline', 'hourglass', 'hourglass outline', 'hourglass end', 'hourglass half', 'hourglass start', 'stopwatch'];
exports.DATE_TIME = DATE_TIME;
var DESIGN = ['adjust', 'clone', 'clone outline', 'copy', 'copy outline', 'crop', 'crosshairs', 'cut', 'edit', 'edit outline', 'eraser', 'eye', 'eye dropper', 'eye slash', 'eye slash outline', 'object group', 'object group outline', 'object ungroup', 'object ungroup outline', 'paint brush', 'paste', 'pencil alternate', 'save', 'save outline', 'tint'];
exports.DESIGN = DESIGN;
var EDITORS = ['align center', 'align justify', 'align left', 'align right', 'bold', 'clipboard', 'clipboard outline', 'clone', 'clone outline', 'columns', 'copy', 'copy outline', 'cut', 'edit', 'edit outline', 'eraser', 'file', 'file outline', 'file alternate', 'file alternate outline', 'font', 'heading', 'i cursor', 'indent', 'italic', 'linkify', 'list', 'list alternate', 'list alternate outline', 'list ol', 'list ul', 'outdent', 'paper plane', 'paper plane outline', 'paperclip', 'paragraph', 'paste', 'pencil alternate', 'print', 'quote left', 'quote right', 'redo', 'redo alternate', 'reply', 'reply all', 'share', 'strikethrough', 'subscript', 'superscript', 'sync', 'sync alternate', 'table', 'tasks', 'text height', 'text width', 'th', 'th large', 'th list', 'trash', 'trash alternate', 'trash alternate outline', 'underline', 'undo', 'undo alternate', 'unlink'];
exports.EDITORS = EDITORS;
var FILES = ['archive', 'clone', 'clone outline', 'copy', 'copy outline', 'cut', 'file', 'file outline', 'file alternate', 'file alternate outline', 'file archive', 'file archive outline', 'file audio', 'file audio outline', 'file code', 'file code outline', 'file excel', 'file excel outline', 'file image', 'file image outline', 'file pdf', 'file pdf outline', 'file powerpoint', 'file powerpoint outline', 'file video', 'file video outline', 'file word', 'file word outline', 'folder', 'folder outline', 'folder open', 'folder open outline', 'paste', 'save', 'save outline', 'sticky note', 'sticky note outline'];
exports.FILES = FILES;
var GENDERS = ['genderless', 'mars', 'mars double', 'mars stroke', 'mars stroke horizontal', 'mars stroke vertical', 'mercury', 'neuter', 'transgender', 'transgender alternate', 'venus', 'venus double', 'venus mars'];
exports.GENDERS = GENDERS;
var HANDS_GESTURES = ['hand lizard', 'hand lizard outline', 'hand paper', 'hand paper outline', 'hand peace', 'hand peace outline', 'hand point down', 'hand point down outline', 'hand point left', 'hand point left outline', 'hand point right', 'hand point right outline', 'hand point up', 'hand point up outline', 'hand pointer', 'hand pointer outline', 'hand rock', 'hand rock outline', 'hand scissors', 'hand scissors outline', 'hand spock', 'hand spock outline', 'handshake', 'handshake outline', 'thumbs down', 'thumbs down outline', 'thumbs up', 'thumbs up outline'];
exports.HANDS_GESTURES = HANDS_GESTURES;
var HEALTH = ['ambulance', 'h square', 'heart', 'heart outline', 'heartbeat', 'hospital', 'hospital outline', 'medkit', 'plus square', 'plus square outline', 'stethoscope', 'user md', 'wheelchair'];
exports.HEALTH = HEALTH;
var IMAGES = ['adjust', 'bolt', 'camera', 'camera retro', 'clone', 'clone outline', 'compress', 'expand', 'eye', 'eye dropper', 'eye slash', 'eye slash outline', 'file image', 'file image outline', 'film', 'id badge', 'id badge outline', 'id card', 'id card outline', 'image', 'image outline', 'images', 'images outline', 'sliders horizontal', 'tint'];
exports.IMAGES = IMAGES;
var INTERFACES = ['ban', 'barcode', 'bars', 'beer', 'bell', 'bell outline', 'bell slash', 'bell slash outline', 'bug', 'bullhorn', 'bullseye', 'calculator', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'calendar check', 'calendar check outline', 'calendar minus', 'calendar minus outline', 'calendar plus', 'calendar plus outline', 'calendar times', 'calendar times outline', 'certificate', 'check', 'check circle', 'check circle outline', 'check square', 'check square outline', 'circle', 'circle outline', 'clipboard', 'clipboard outline', 'clone', 'clone outline', 'cloud', 'cloud download', 'cloud upload', 'coffee', 'cog', 'cogs', 'copy', 'copy outline', 'cut', 'database', 'dot circle', 'dot circle outline', 'download', 'edit', 'edit outline', 'ellipsis horizontal', 'ellipsis vertical', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'eraser', 'exclamation', 'exclamation circle', 'exclamation triangle', 'external alternate', 'external square alternate', 'eye', 'eye slash', 'eye slash outline', 'file', 'file outline', 'file alternate', 'file alternate outline', 'filter', 'flag', 'flag outline', 'flag checkered', 'folder', 'folder outline', 'folder open', 'folder open outline', 'frown', 'frown outline', 'hashtag', 'heart', 'heart outline', 'history', 'home', 'i cursor', 'info', 'info circle', 'language', 'magic', 'meh', 'meh outline', 'microphone', 'microphone slash', 'minus', 'minus circle', 'minus square', 'minus square outline', 'paste', 'pencil alternate', 'plus', 'plus circle', 'plus square', 'plus square outline', 'qrcode', 'question', 'question circle', 'question circle outline', 'quote left', 'quote right', 'redo', 'redo alternate', 'reply', 'reply all', 'rss', 'rss square', 'save', 'save outline', 'search', 'search minus', 'search plus', 'share', 'share alternate', 'share alternate square', 'share square', 'share square outline', 'shield alternate', 'sign-in', 'sign-out', 'signal', 'sitemap', 'sliders horizontal', 'smile', 'smile outline', 'sort', 'sort alphabet down', 'sort alphabet up', 'sort amount down', 'sort amount up', 'sort down', 'sort numeric down', 'sort numeric up', 'sort up', 'star', 'star outline', 'star half', 'star half outline', 'sync', 'sync alternate', 'thumbs down', 'thumbs down outline', 'thumbs up', 'thumbs up outline', 'times', 'times circle', 'times circle outline', 'toggle off', 'toggle on', 'trash', 'trash alternate', 'trash alternate outline', 'trophy', 'undo', 'undo alternate', 'upload', 'user', 'user outline', 'user circle', 'user circle outline', 'wifi'];
exports.INTERFACES = INTERFACES;
var LOGISTICS = ['box', 'boxes', 'clipboard check', 'clipboard list', 'dolly', 'dolly flatbed', 'pallet', 'shipping fast', 'truck', 'warehouse'];
exports.LOGISTICS = LOGISTICS;
var MAPS = ['ambulance', 'anchor', 'balance scale', 'bath', 'bed', 'beer', 'bell', 'bell outline', 'bell slash', 'bell slash outline', 'bicycle', 'binoculars', 'birthday cake', 'blind', 'bomb', 'book', 'bookmark', 'bookmark outline', 'briefcase', 'building', 'building outline', 'car', 'coffee', 'crosshairs', 'dollar sign', 'eye', 'eye slash', 'eye slash outline', 'fighter jet', 'fire', 'fire extinguisher', 'flag', 'flag outline', 'flag checkered', 'flask', 'gamepad', 'gavel', 'gift', 'glass martini', 'globe', 'graduation cap', 'h square', 'heart', 'heart outline', 'heartbeat', 'home', 'hospital', 'hospital outline', 'image', 'image outline', 'images', 'images outline', 'industry', 'info', 'info circle', 'key', 'leaf', 'lemon', 'lemon outline', 'life ring', 'life ring outline', 'lightbulb', 'lightbulb outline', 'location arrow', 'low vision', 'magnet', 'male', 'map', 'map outline', 'map marker', 'map marker alternate', 'map pin', 'map signs', 'medkit', 'money bill alternate', 'money bill alternate outline', 'motorcycle', 'music', 'newspaper', 'newspaper outline', 'paw', 'phone', 'phone square', 'phone volume', 'plane', 'plug', 'plus', 'plus square', 'plus square outline', 'print', 'recycle', 'road', 'rocket', 'search', 'search minus', 'search plus', 'ship', 'shopping bag', 'shopping basket', 'shopping cart', 'shower', 'street view', 'subway', 'suitcase', 'tag', 'tags', 'taxi', 'thumbtack', 'ticket alternate', 'tint', 'train', 'tree', 'trophy', 'truck', 'tty', 'umbrella', 'university', 'utensil spoon', 'utensils', 'wheelchair', 'wifi', 'wrench'];
exports.MAPS = MAPS;
var MEDICAL = ['ambulance', 'band aid', 'dna', 'first aid', 'heart', 'heart outline', 'heartbeat', 'hospital', 'hospital outline', 'hospital symbol', 'pills', 'plus', 'stethoscope', 'syringe', 'thermometer', 'user md', 'weight'];
exports.MEDICAL = MEDICAL;
var OBJECTS = ['ambulance', 'anchor', 'archive', 'balance scale', 'bath', 'bed', 'beer', 'bell', 'bell outline', 'bicycle', 'binoculars', 'birthday cake', 'bomb', 'book', 'bookmark', 'bookmark outline', 'briefcase', 'bug', 'building', 'building outline', 'bullhorn', 'bullseye', 'bus', 'calculator', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'camera', 'camera retro', 'car', 'clipboard', 'clipboard outline', 'cloud', 'coffee', 'cog', 'cogs', 'compass', 'compass outline', 'copy', 'copy outline', 'cube', 'cubes', 'cut', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'eraser', 'eye', 'eye dropper', 'fax', 'fighter jet', 'file', 'file outline', 'file alternate', 'file alternate outline', 'film', 'fire', 'fire extinguisher', 'flag', 'flag outline', 'flag checkered', 'flask', 'futbol', 'futbol outline', 'gamepad', 'gavel', 'gem', 'gem outline', 'gift', 'glass martini', 'globe', 'graduation cap', 'hdd', 'hdd outline', 'headphones', 'heart', 'heart outline', 'home', 'hospital', 'hospital outline', 'hourglass', 'hourglass outline', 'image', 'image outline', 'images', 'images outline', 'industry', 'key', 'keyboard', 'keyboard outline', 'laptop', 'leaf', 'lemon', 'lemon outline', 'life ring', 'life ring outline', 'lightbulb', 'lightbulb outline', 'lock', 'lock open', 'magic', 'magnet', 'map', 'map outline', 'map marker', 'map marker alternate', 'map pin', 'map signs', 'medkit', 'microchip', 'microphone', 'mobile', 'mobile alternate', 'money bill alternate', 'money bill alternate outline', 'moon', 'moon outline', 'motorcycle', 'newspaper', 'newspaper outline', 'paint brush', 'paper plane', 'paper plane outline', 'paperclip', 'paste', 'paw', 'pencil alternate', 'phone', 'plane', 'plug', 'print', 'puzzle piece', 'road', 'rocket', 'save', 'save outline', 'search', 'shield alternate', 'shopping bag', 'shopping basket', 'shopping cart', 'shower', 'snowflake', 'snowflake outline', 'space shuttle', 'star', 'star outline', 'sticky note', 'sticky note outline', 'stopwatch', 'subway', 'suitcase', 'sun', 'sun outline', 'tablet', 'tablet alternate', 'tachometer alternate', 'tag', 'tags', 'taxi', 'thumbtack', 'ticket alternate', 'train', 'trash', 'trash alternate', 'trash alternate outline', 'tree', 'trophy', 'truck', 'tv', 'umbrella', 'university', 'unlock', 'unlock alternate', 'utensil spoon', 'utensils', 'wheelchair', 'wrench'];
exports.OBJECTS = OBJECTS;
var PAYMENTS_SHOPPING = ['bell', 'bell outline', 'bookmark', 'bookmark outline', 'bullhorn', 'camera', 'camera retro', 'cart arrow down', 'cart plus', 'certificate', 'credit card', 'credit card outline', 'gem', 'gem outline', 'gift', 'handshake', 'handshake outline', 'heart', 'heart outline', 'key', 'shopping bag', 'shopping basket', 'shopping cart', 'star', 'star outline', 'tag', 'tags', 'thumbs down', 'thumbs down outline', 'thumbs up', 'thumbs up outline', 'trophy'];
exports.PAYMENTS_SHOPPING = PAYMENTS_SHOPPING;
var SHAPES = ['bookmark', 'bookmark outline', 'calendar', 'calendar outline', 'certificate', 'circle', 'circle outline', 'cloud', 'comment', 'comment outline', 'file', 'file outline', 'folder', 'folder outline', 'heart', 'heart outline', 'map marker', 'play', 'square', 'square outline', 'star', 'star outline'];
exports.SHAPES = SHAPES;
var SPINNERS = ['asterisk', 'certificate', 'circle notch', 'cog', 'compass', 'compass outline', 'crosshairs', 'life ring', 'life ring outline', 'snowflake', 'snowflake outline', 'spinner', 'sun', 'sun outline', 'sync'];
exports.SPINNERS = SPINNERS;
var SPORTS = ['baseball ball', 'basketball ball', 'bowling ball', 'football ball', 'futbol', 'futbol outline', 'golf ball', 'hockey puck', 'quidditch', 'table tennis', 'volleyball ball'];
exports.SPORTS = SPORTS;
var STATUS = ['ban', 'battery empty', 'battery full', 'battery half', 'battery quarter', 'battery three quarters', 'bell', 'bell outline', 'bell slash', 'bell slash outline', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'calendar check', 'calendar check outline', 'calendar minus', 'calendar minus outline', 'calendar plus', 'calendar plus outline', 'calendar times', 'calendar times outline', 'cart arrow down', 'cart plus', 'exclamation', 'exclamation circle', 'exclamation triangle', 'eye', 'eye slash', 'eye slash outline', 'file', 'file outline', 'file alternate', 'file alternate outline', 'folder', 'folder outline', 'folder open', 'folder open outline', 'info', 'info circle', 'lock', 'lock open', 'minus', 'minus circle', 'minus square', 'minus square outline', 'plus', 'plus circle', 'plus square', 'plus square outline', 'question', 'question circle', 'question circle outline', 'shield alternate', 'shopping cart', 'sign in alternate', 'sign out alternate', 'thermometer empty', 'thermometer full', 'thermometer half', 'thermometer quarter', 'thermometer three quarters', 'thumbs down', 'thumbs down outline', 'thumbs up', 'thumbs up outline', 'toggle off', 'toggle on', 'unlock', 'unlock alternate'];
exports.STATUS = STATUS;
var USERS_PEOPLE = ['address book', 'address book outline', 'address card', 'address card outline', 'bed', 'blind', 'child', 'female', 'frown', 'frown outline', 'id badge', 'id badge outline', 'id card', 'id card outline', 'male', 'meh', 'meh outline', 'power off', 'smile', 'smile outline', 'street view', 'user', 'user outline', 'user circle', 'user circle outline', 'user md', 'user plus', 'user secret', 'user times', 'users', 'wheelchair'];
exports.USERS_PEOPLE = USERS_PEOPLE;
var VEHICLES = ['ambulance', 'bicycle', 'bus', 'car', 'fighter jet', 'motorcycle', 'paper plane', 'paper plane outline', 'plane', 'rocket', 'ship', 'shopping cart', 'space shuttle', 'subway', 'taxi', 'train', 'truck', 'wheelchair'];
exports.VEHICLES = VEHICLES;
var WRITING = ['archive', 'book', 'bookmark', 'bookmark outline', 'edit', 'edit outline', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'eraser', 'file', 'file outline', 'file alternate', 'file alternate outline', 'folder', 'folder outline', 'folder open', 'folder open outline', 'keyboard', 'keyboard outline', 'newspaper', 'newspaper outline', 'paper plane', 'paper plane outline', 'paperclip', 'paragraph', 'pen square', 'pencil alternate', 'quote left', 'quote right', 'sticky note', 'sticky note outline', 'thumbtack'];
exports.WRITING = WRITING;
var BRANDS = ['500px', 'accessible', 'accusoft', 'adn', 'adversal', 'affiliatetheme', 'algolia', 'amazon', 'amazon pay', 'amilia', 'android', 'angellist', 'angrycreative', 'angular', 'app store', 'app store ios', 'apper', 'apple', 'apple pay', 'asymmetrik', 'audible', 'autoprefixer', 'avianex', 'aviato', 'aws', 'bandcamp', 'behance', 'behance square', 'bimobject', 'bitbucket', 'bitcoin', 'bity', 'black tie', 'blackberry', 'blogger', 'blogger b', 'bluetooth', 'bluetooth b', 'btc', 'buromobelexperte', 'buysellads', 'cc amazon pay', 'cc amex', 'cc apple pay', 'cc diners club', 'cc discover', 'cc jcb', 'cc mastercard', 'cc paypal', 'cc stripe', 'cc visa', 'centercode', 'chrome', 'cloudscale', 'cloudsmith', 'cloudversify', 'codepen', 'codiepie', 'connectdevelop', 'contao', 'cpanel', 'creative commons', 'css3', 'css3 alternate', 'cuttlefish', 'd and d', 'dashcube', 'delicious', 'deploydog', 'deskpro', 'deviantart', 'digg', 'digital ocean', 'discord', 'discourse', 'dochub', 'docker', 'draft2digital', 'dribbble', 'dribbble square', 'dropbox', 'drupal', 'dyalog', 'earlybirds', 'edge', 'elementor', 'ember', 'empire', 'envira', 'erlang', 'ethereum', 'etsy', 'expeditedssl', 'facebook', 'facebook f', 'facebook messenger', 'facebook square', 'firefox', 'first order', 'firstdraft', 'flickr', 'flipboard', 'fly', 'font awesome', 'font awesome alternate', 'font awesome flag', 'fonticons', 'fonticons fi', 'fort awesome', 'fort awesome alternate', 'forumbee', 'foursquare', 'free code camp', 'freebsd', 'get pocket', 'gg', 'gg circle', 'git', 'git square', 'github', 'github alternate', 'github square', 'gitkraken', 'gitlab', 'gitter', 'glide', 'glide g', 'gofore', 'goodreads', 'goodreads g', 'google', 'google drive', 'google play', 'google plus', 'google plus g', 'google plus square', 'google wallet', 'gratipay', 'grav', 'gripfire', 'grunt', 'gulp', 'hacker news', 'hacker news square', 'hips', 'hire a helper', 'hooli', 'hotjar', 'houzz', 'html5', 'hubspot', 'imdb', 'instagram', 'internet explorer', 'ioxhost', 'itunes', 'itunes note', 'jenkins', 'joget', 'joomla', 'js', 'js square', 'jsfiddle', 'keycdn', 'kickstarter', 'kickstarter k', 'korvue', 'laravel', 'lastfm', 'lastfm square', 'leanpub', 'less', 'linechat', 'linkedin', 'linkedin alternate', 'linode', 'linux', 'lyft', 'magento', 'maxcdn', 'medapps', 'medium', 'medium m', 'medrt', 'meetup', 'microsoft', 'mix', 'mixcloud', 'mizuni', 'modx', 'monero', 'napster', 'nintendo switch', 'node', 'node js', 'npm', 'ns8', 'nutritionix', 'odnoklassniki', 'odnoklassniki square', 'opencart', 'openid', 'opera', 'optin monster', 'osi', 'page4', 'pagelines', 'palfed', 'patreon', 'paypal', 'periscope', 'phabricator', 'phoenix framework', 'php', 'pied piper', 'pied piper alternate', 'pied piper pp', 'pinterest', 'pinterest p', 'pinterest square', 'playstation', 'product hunt', 'pushed', 'python', 'qq', 'quinscape', 'quora', 'ravelry', 'react', 'rebel', 'redriver', 'reddit', 'reddit alien', 'reddit square', 'rendact', 'renren', 'replyd', 'resolving', 'rocketchat', 'rockrms', 'safari', 'sass', 'schlix', 'scribd', 'searchengin', 'sellcast', 'sellsy', 'servicestack', 'shirtsinbulk', 'simplybuilt', 'sistrix', 'skyatlas', 'skype', 'slack', 'slack hash', 'slideshare', 'snapchat', 'snapchat ghost', 'snapchat square', 'soundcloud', 'speakap', 'spotify', 'stack exchange', 'stack overflow', 'staylinked', 'steam', 'steam square', 'steam symbol', 'sticker mule', 'strava', 'stripe', 'stripe s', 'studiovinari', 'stumbleupon', 'stumbleupon circle', 'superpowers', 'supple', 'telegram', 'telegram plane', 'tencent weibo', 'themeisle', 'trello', 'tripadvisor', 'tumblr', 'tumblr square', 'twitch', 'twitter', 'twitter square', 'typo3', 'uber', 'uikit', 'uniregistry', 'untappd', 'usb', 'ussunnah', 'vaadin', 'viacoin', 'viadeo', 'viadeo square', 'viber', 'vimeo', 'vimeo square', 'vimeo v', 'vine', 'vk', 'vnv', 'vuejs', 'wechat', 'weibo', 'weixin', 'whatsapp', 'whatsapp square', 'whmcs', 'wikipedia w', 'windows', 'wordpress', 'wordpress simple', 'wpbeginner', 'wpexplorer', 'wpforms', 'xbox', 'xing', 'xing square', 'y combinator', 'yahoo', 'yandex', 'yandex international', 'yelp', 'yoast', 'youtube', 'youtube square'];
exports.BRANDS = BRANDS;
var ICONS = (0, _uniq2.default)([].concat(ACCESSIBILITY, ARROWS, AUDIO_VIDEO, BUSINESS, CHESS, CODE, COMMUNICATION, COMPUTERS, CURRENCY, DATE_TIME, DESIGN, EDITORS, FILES, GENDERS, HANDS_GESTURES, HEALTH, IMAGES, INTERFACES, LOGISTICS, MAPS, MEDICAL, OBJECTS, PAYMENTS_SHOPPING, SHAPES, SPINNERS, SPORTS, STATUS, USERS_PEOPLE, VEHICLES, WRITING, BRANDS));
exports.ICONS = ICONS;
var ICON_ALIASES = ['chess rock', 'ordered list', 'unordered list', 'user doctor', 'shield', 'puzzle', 'add circle', 'add square', 'add to calendar', 'add to cart', 'add user', 'add', 'alarm mute', 'alarm', 'ald', 'als', 'announcement', 'area chart', 'area graph', 'arrow down cart', 'asexual', 'asl interpreting', 'asl', 'assistive listening devices', 'attach', 'attention', 'balance', 'bar', 'bathtub', 'battery four', 'battery high', 'battery low', 'battery one', 'battery three', 'battery two', 'battery zero', 'birthday', 'block layout', 'bluetooth alternative', 'broken chain', 'browser', 'call square', 'call', 'cancel', 'cart', 'cc', 'chain', 'chat', 'checked calendar', 'checkmark', 'circle notched', 'close', 'cny', 'cocktail', 'commenting', 'computer', 'configure', 'content', 'deafness', 'delete calendar', 'delete', 'detective', 'discussions', 'doctor', 'dollar', 'dont', 'drivers license', 'dropdown', 'emergency', 'envira gallery', 'erase', 'eur', 'euro', 'eyedropper', 'factory', 'favorite', 'feed', 'female homosexual', 'file text', 'file text outline', 'find', 'first aid', 'fork', 'game', 'gay', 'gbp', 'google plus circle', 'google plus official', 'grab', 'graduation', 'grid layout', 'group', 'h', 'hand victory', 'handicap', 'hard of hearing', 'header', 'help circle', 'help', 'heterosexual', 'hide', 'hotel', 'hourglass four', 'hourglass full', 'hourglass one', 'hourglass three', 'hourglass two', 'idea', 'ils', 'in cart', 'inr', 'intergender', 'intersex', 'jpy', 'krw', 'lab', 'law', 'legal', 'lesbian', 'lightning', 'like', 'line graph', 'linkedin square', 'linkify', 'lira', 'list layout', 'magnify', 'mail forward', 'mail outline', 'mail square', 'mail', 'male homosexual', 'man', 'marker', 'mars alternate', 'mars horizontal', 'mars vertical', 'microsoft edge', 'military', 'ms edge', 'mute', 'new pied piper', 'non binary transgender', 'numbered list', 'options', 'other gender horizontal', 'other gender vertical', 'other gender', 'payment', 'paypal card', 'pencil square', 'photo', 'picture', 'pie chart', 'pie graph', 'pied piper hat', 'pin', 'plus cart', 'point', 'pointing down', 'pointing left', 'pointing right', 'pointing up', 'pound', 'power cord', 'power', 'privacy', 'r circle', 'rain', 'record', 'refresh', 'remove circle', 'remove from calendar', 'remove user', 'remove', 'repeat', 'rmb', 'rouble', 'rub', 'ruble', 'rupee', 's15', 'selected radio', 'send', 'setting', 'settings', 'shekel', 'sheqel', 'shipping', 'shop', 'shuffle', 'shutdown', 'sidebar', 'signing', 'signup', 'sliders', 'soccer', 'sort alphabet ascending', 'sort alphabet descending', 'sort ascending', 'sort content ascending', 'sort content descending', 'sort descending', 'sort numeric ascending', 'sort numeric descending', 'sound', 'spy', 'stripe card', 'student', 'talk', 'target', 'teletype', 'television', 'text cursor', 'text telephone', 'theme', 'thermometer', 'thumb tack', 'time', 'tm', 'toggle down', 'toggle left', 'toggle right', 'toggle up', 'translate', 'travel', 'treatment', 'triangle down', 'triangle left', 'triangle right', 'triangle up', 'try', 'unhide', 'unlinkify', 'unmute', 'usd', 'user cancel', 'user close', 'user delete', 'user x', 'vcard', 'video camera', 'video play', 'volume control phone', 'wait', 'warning circle', 'warning sign', 'warning', 'wi-fi', 'winner', 'wizard', 'woman', 'won', 'wordpress beginner', 'wordpress forms', 'world', 'write square', 'x', 'yen', 'zip', 'zoom in', 'zoom out', 'zoom', 'bitbucket square', 'checkmark box', 'circle thin', 'cloud download', 'cloud upload', 'compose', 'conversation', 'credit card alternative', 'currency', 'dashboard', 'diamond', 'disk', 'exchange', 'external share', 'external square', 'external', 'facebook official', 'food', 'hourglass zero', 'level down', 'level up', 'log out', 'meanpath', 'money', 'move', 'pencil', 'protect', 'radio', 'remove bookmark', 'resize horizontal', 'resize vertical', 'sign in', 'sign out', 'spoon', 'star half empty', 'star half full', 'ticket', 'times rectangle', 'write', 'youtube play'];
exports.ICON_ALIASES = ICON_ALIASES;
var ICONS_AND_ALIASES = (0, _uniq2.default)([].concat(ICONS, ICON_ALIASES)); // Some icon names are not part of icons.css.
// These are only valid as children of other components.
// Their CSS rules are defined by a specific component's CSS.
// We don't want to show name warnings for those usages so we add them as valid names here.

exports.ICONS_AND_ALIASES = ICONS_AND_ALIASES;
var COMPONENT_CONTEXT_SPECIFIC_ICONS = ['left dropdown' // nested dropdown menu direction icon
];
exports.COMPONENT_CONTEXT_SPECIFIC_ICONS = COMPONENT_CONTEXT_SPECIFIC_ICONS;
var ALL_ICONS_IN_ALL_CONTEXTS = (0, _uniq2.default)([].concat(ICONS_AND_ALIASES, COMPONENT_CONTEXT_SPECIFIC_ICONS));
exports.ALL_ICONS_IN_ALL_CONTEXTS = ALL_ICONS_IN_ALL_CONTEXTS;