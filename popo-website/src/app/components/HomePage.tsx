export default function HomePage() {
  return (
    <div className="flex flex-row">
      <div className="basis-1/3">
        <div className="card glass m-6  bg-blue-200">
          <figure>
            <img
              src="/images/CutUp_WGG3647.png"
              alt="wgg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Satoshi</h2>
            <p>Welcome come back!</p>
            <ul className="list-disc">
                <li>Join Time: 2024/06/01</li>
                <li>Popoes: 8</li>
                <li>Balances: 100,000</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="basis-2/3 text-center">
        <h1 className="text-5xl font-bold">Collections</h1>
        <div className="card card-side bg-base-100 shadow-xl w-90 h-60 m-4">
          <figure>
            <img
              src="/images/1.jpg"
              alt="popo#1"
              className="w-64 h-64"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pikachu <span>Level: 1</span> </h2>
            <p>It is a cute popo.It is a cute popo.It is a cute popo.It is a cute popo.It is a cute popo.</p>
            <div className="card-actions justify-end flex">
              <button className="btn btn-primary">Swap</button>
              <button className="btn btn-primary">Sell</button>
              <button disabled className="btn btn-primary disabled">Evolve</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
