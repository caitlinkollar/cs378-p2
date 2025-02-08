import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.

function MenuItemName({ title }) {
    return (
        <h2 className="menu-item-name">
            {title}
        </h2>
    );
}

function MenuDescription({ description }) {
    return (
        <h2 className="menu-description">
            {description}
        </h2>
    );
}


function MenuPrice({price}) {
    return (
        <h2 className="menu-price">
            {price}
        </h2>
    );
}

function AddButton() {
    return (
        <button style={{ backgroundColor: "rgb(248, 126, 195)", color: "rgb(225,255,255)", borderRadius: "4px", border: "none" }}>
            ADD
        </button>
    );
}

function MenuImage({ img }) {
    return (
        <img 
            src={`/images/${img}`} 
            alt={img} 
            className="card-img-top ml-3"  
            style={{ 
                width: "100%", 
                aspectRatio: "1 / 1", 
                objectFit: "cover", 
                borderRadius: "8px" 
            }} 
        />
    );
}

const MenuItem = ({ title, description, price, img }) => {
    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col">
                    <MenuImage img={img} />
                </div>
                <div className="col">
                    <MenuItemName title={title} />
                    <MenuDescription description={description} />
                    <div className="d-flex justify-content-between align-items-center">
                        <MenuPrice price={price} />
                        <AddButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;

