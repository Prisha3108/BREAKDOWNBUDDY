import React, { useState } from "react";
import "./css/Reviews.css"; // Corrected path to Reviews.css

function Reviews() {
    const customerReviews = [
        { name: "Rahul Sharma", location: "Pune", message: "I was stranded on the highway with a dead battery, and Revive Roadside Assistance came to my rescue within 20 minutes. The mechanic was friendly and professional, and he had my car up and running in no time. I highly recommend their services to anyone in need of roadside assistance." },
        { name: "Arun Joshi", location: "Mumbai", message: "My tire blew out on a dark and rainy night, and I felt helpless on the side of the road. But thanks to Revive Roadside Assistance, I was back on the road in no time. The technician arrived quickly, and he even helped me change my tire in the pouring rain. I'm so grateful for their prompt and reliable service." },
        { name: "Laksh Verma", location: "Navi Mumbai", message: "I ran out of gas on my way to an important meeting, and I was worried that I would be late. But Revive Roadside Assistance saved the day! They delivered fuel to my location within 30 minutes, and I made it to my meeting with time to spare. Their professionalism and efficiency exceeded my expectations, and I will definitely be using their services again." },
        { name: "Avni Mehra", location: "Pune", message: "I accidentally locked my keys in my car while running errands, and I was panicking because I had groceries in the trunk. Thankfully, Revive Roadside Assistance was able to unlock my car door in no time. The locksmith was friendly and courteous, and he had me back on the road in minutes. I'm extremely satisfied with their service and would highly recommend them to anyone in need of assistance." },
    ];

    const [reviewIndex, setReviewIndex] = useState(0);
    const review = customerReviews[reviewIndex];

    const backBtnClick = () => {
        setReviewIndex(prevIndex => (prevIndex === 0 ? customerReviews.length - 1 : prevIndex - 1));
    };

    const frontBtnClick = () => {
        setReviewIndex(prevIndex => (prevIndex === customerReviews.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="review-section" id="reviews">
            <div className="rw-text-content">
                <p className="rw-text-title">
                    More over <span className="rw-text-num">1500+ Customers</span>
                </p>
                <p className="rw-text-desc">Don't believe us, Check clients word</p>
                <p className="rw-text-format">
                    <span className="rw-text-quote1">''</span>
                    <span className="rw-review">{review.message}</span>
                    <span className="rw-text-quote2">''</span>
                </p>
                <div className="rw-authors">
                    <div className="rw-names">
                        <p className="rw-reviewer-name">{review.name}</p>
                        <p className="rw-reviewer-place">{review.location}</p>
                    </div>
                    <div className="rw-btns">
                        <button className="rw-next-btn" type="button" onClick={backBtnClick}>
                            ←
                        </button>
                        <button className="rw-next-btn" type="button" onClick={frontBtnClick}>
                            →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
