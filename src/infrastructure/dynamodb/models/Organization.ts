import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
    name: String,
    isActive: Boolean,
});

export default dynamoose.model('Organization', schema);
