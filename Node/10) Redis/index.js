import express from 'express';
import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: 'GbZVB4J1xX3Q625QoAXJQTQ2QszqF0db',
    socket: {
        host: 'redis-17739.c239.us-east-1-2.ec2.redns.redis-cloud.com',
        port: 17739
    }
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

const app = express();
const PORT = 5000;


const localProducts = [
    { name: 'Ali', age: 22, education: 'Matric' },
    { name: 'Ali', age: 22, education: 'Matric' },
    { name: 'Ali', age: 22, education: 'Matric' },
    { name: 'Ali', age: 22, education: 'Matric' },
    { name: 'Ali', age: 22, education: 'Matric' },
    { name: 'Ali', age: 22, education: 'Matric' },
    { name: 'Ali', age: 22, education: 'Matric' },
    { name: 'Ali', age: 22, education: 'Matric' },
    { name: 'Ali', age: 22, education: 'Matric' },
    { name: 'Ali', age: 22, education: 'Matric' },
    { name: 'Ali', age: 22, education: 'Matric' },
    { name: 'Ali', age: 22, education: 'Matric' },
    { name: 'Ali', age: 22, education: 'Matric' },
    { name: 'Ali', age: 22, education: 'Matric' },
    { name: 'Ali', age: 22, education: 'Matric' },
    { name: 'Ali', age: 22, education: 'Matric' },
    { name: 'Ali', age: 22, education: 'Matric' },
]


app.get('/products', async (req, res) => {
    try {
        const cacheProducts = await client.get('products');
        if (cacheProducts) {
            return res.send({
                message: 'Products from Redis',
                data: JSON.parse(cacheProducts)
            })
        }

        await client.setEx('products', 60, JSON.stringify(localProducts));
        return res.send({
            message: 'Products from Local Array',
            data: localProducts
        })
    } catch (error) {
        console.log('error', error);
    }

})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})

