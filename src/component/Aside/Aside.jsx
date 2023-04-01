
import './Aside.css';

const Aside = ({ carts, readTimes }) => {
    // console.log(carts);
    let times = 0;
    for (const time of readTimes) {
        times += time.time

    }
    return (
        <div>
            <div className='card card-head'>
                <h5>Spend time on read :{times} min</h5>
            </div>
            <div className="card card-body">
                <h5>Bookmarked Blogs : {carts.length} </h5>

                {carts.map((data, index) => (
                    <div key={index}>
                        <h6 className="card card-title align-items-center p-3">{data.title}</h6>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Aside;