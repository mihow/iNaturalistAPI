const Joi = require( "joi" );
const user = require( "./user" );

module.exports = Joi.object( ).keys( {
  total_results: Joi.number( ).integer( ).required( ),
  page: Joi.number( ).integer( ).required( ),
  per_page: Joi.number( ).integer( ).required( ),
  results: Joi.array( ).items( Joi.object( ).keys( {
    observation_count: Joi.number( ).integer( ).required( ),
    species_count: Joi.number( ).integer( ).required( ),
    user: user.required( )
  } ) ).required( )
} ).unknown( false );
