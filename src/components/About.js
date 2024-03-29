import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import trees from '../trees.jpg';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

const About = () => {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == 'author']{
                name,
                bio,
                'authorImage': image.asset->url
            }`
        ).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if (!author) return <div className='bg-lime-100 min-h-screen p-12'><h1>Loading...just a second</h1></div>

    return (
        <main className='relative bg-lime-100 min-h-screen'>
            <img
            src={trees}
            alt="Glenorchy Trees"
            className='absolute w-full' />
            <div className='p-10 lg:pt-48 container mx-auto relative'>
                <section className='bg-lime-800 rounded-lg shadow-2xl lg:flex p-20'>
                    <img src={urlFor(author.authorImage).url()}
                    className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8'
                    alt={author.name}
                    />
                    <div className='text-lg flex flex-col justify-center'>
                        <h1 className='cursive text-6xl text-lime-300 mb-4'>
                            Hey there. I'm{' '}
                            <span className='text-lime-100'>{author.name}</span>
                        </h1>
                        <div className='prose lg:prose-xl text-gray-300'>
                            <BlockContent blocks={author.bio} projectId='qxfkabgb' dataset='production'/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About
