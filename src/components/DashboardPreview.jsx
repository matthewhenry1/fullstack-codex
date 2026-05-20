function DashboardPreview() {
  const bars = [
    "bar-38",
    "bar-68",
    "bar-52",
    "bar-82",
    "bar-61",
    "bar-91",
    "bar-74",
  ];

  return (
    <div className="product-shell" aria-label="Finance operations dashboard preview">
      <div className="dashboard-topbar">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="dashboard-grid">
        <article className="balance-panel">
          <p>Available balance</p>
          <strong>$12,840,520</strong>
          <span>+18.4% month over month</span>
        </article>
        <article className="risk-panel">
          <div>
            <p>Risk score</p>
            <strong>Low</strong>
          </div>
          <div className="risk-ring" aria-hidden="true">
            92
          </div>
        </article>
        <article className="flow-panel">
          <div className="flow-head">
            <p>Live volume</p>
            <strong>$3.2M</strong>
          </div>
          <div className="bar-chart" aria-hidden="true">
            {bars.map((barClass) => (
              <span className={barClass} key={barClass}></span>
            ))}
          </div>
        </article>
        <article className="activity-panel">
          <div className="activity-item approved">
            <span></span>
            <div>
              <strong>ACH batch settled</strong>
              <p>2,840 payments</p>
            </div>
            <b>$980K</b>
          </div>
          <div className="activity-item review">
            <span></span>
            <div>
              <strong>Card dispute review</strong>
              <p>Risk queue</p>
            </div>
            <b>12</b>
          </div>
          <div className="activity-item approved">
            <span></span>
            <div>
              <strong>Treasury sweep complete</strong>
              <p>Operating account</p>
            </div>
            <b>$2.4M</b>
          </div>
        </article>
      </div>
    </div>
  );
}

export default DashboardPreview;
