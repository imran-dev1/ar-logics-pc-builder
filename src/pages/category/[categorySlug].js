import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';

const CategoryArchive = () => {
    return (
        <div>
            Category archive
        </div>
    );
};

export default CategoryArchive;

CategoryArchive.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
 };