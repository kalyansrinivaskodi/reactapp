export function Pricing() {
  return (
    <div className="Pricing">
      <div className="container">
        <div className="starting">
          <p className="card-name">FREE</p>
          <h6 class="card-price text-center">$0<span className="period">/month</span></h6>
        </div>
        <ul>
          <li className="free-listed">Single User</li>
          <li className="free-listed">5GB Storage</li>
          <li className="free-listed">Unlimited Public Projects</li>
          <li className="free-listed">Community Access</li>
          <li className="free-listed">Unlimited Private Projects</li>
          <li className="free-listed">Dedicated Phone Support</li>
          <li className="free-listed">Free Subdomain</li>
          <li className="free-listed">Monthly Status Reports</li>
        </ul>
        <button className="button" type="button">BUTTON</button>
      </div>
      <div className="container">
        <div className="starting">
          <p className="card-name">PLUS</p>
          <h6 class="card-price text-center">$9<span className="period">/month</span></h6>

        </div>
        <ul>
          <li className="plus-listed"><strong>5 Users</strong></li>
          <li className="plus-listed">5GB Storage</li>
          <li className="plus-listed">Unlimited Public Projects</li>
          <li className="plus-listed">Community Access</li>
          <li className="plus-listed">Unlimited Private Projects</li>
          <li className="plus-listed">Dedicated Phone Support</li>
          <li className="plus-listed">Free Subdomain</li>
          <li className="plus-listed">Monthly Status Reports</li>
        </ul>
        <button className="button" type="button">BUTTON</button>
      </div>
      <div className="container">
        <div className="starting">
          <p className="card-name">PRO</p>
          <h6 class="card-price text-center">$49<span className="period">/month</span></h6>
        </div>
        <ul>
          <li className="pro-listed"><strong>Unlimited User</strong></li>
          <li className="pro-listed">5GB Storage</li>
          <li className="pro-listed">Unlimited Public Projects</li>
          <li className="pro-listed">Community Access</li>
          <li className="pro-listed">Unlimited Private Projects</li>
          <li className="pro-listed">Dedicated Phone Support</li>
          <li className="pro-listed"><strong>Unlimited </strong>Free Subdomains</li>
          <li className="pro-listed">Monthly Status Reports</li>
        </ul>
        <button className="button" type="button">BUTTON</button>
      </div>
    </div>
  );
}
