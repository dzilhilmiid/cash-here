import "../styles/report.css"

function Report() {
    return(
         <div className="report-page">
            <div className="report-header">
                <div>
                    <h1>Laporan</h1>
                    <p>
                        Monitor dan analisa seluruh laporan bisnis
                    </p>
                </div>
                <div className="report-action">
                    <button className="export-btn">
                        Export PDF
                    </button>
                    <button className="print-btn">
                        Print
                    </button>
                </div>
            </div>
            <div className="report-summary">
                <div className="report-card">
                    <span>Total Pendapatan</span>
                    <h2>Rp 120.000.000</h2>
                </div>
                <div className="report-card">
                    <span>Total Pengeluaran</span>
                    <h2>Rp 48.000.000</h2>
                </div>
                <div className="report-card">
                    <span>Total Profit</span>
                    <h2>Rp 72.000.000</h2>
                </div>
                <div className="report-card">
                    <span>Total Transaksi</span>
                    <h2>1.240</h2>
                </div>
            </div>
            <div className="report-filter">
                <input type="text" placeholder="Cari Laporan..." />
                <input type="date" />
                <select>
                    <option>Semua Laporan</option>
                    <option>Pendapatan</option>
                    <option>Pengeluaran</option>
                    <option>Profit</option>
                </select>
                <button>
                    Filter
                </button>
            </div>
            <div className="report-chart-section">
                <div className="section-header">
                    <h3>Statistik Keuangan</h3>
                </div>
                <div className="chart-container">
                    {/* Chart Here */}
                </div>
            </div>
            <div className="report-table-section">
                <div className="section-header">
                    <h3>Riwayat Laporan</h3>
                </div>
                <table className="report-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tanggal</th>
                            <th>Jenis</th>
                            <th>Keterangan</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#RPT001</td>
                            <td>21 Mei 2026</td>
                            <td>Pendapatan</td>
                            <td>Penjualan Bulanan</td>
                            <td>Rp 12.000.000</td>
                            <td>
                                <span className="success">
                                    Selesai
                                </span>
                            </td>
                            <td>
                                <button>Detail</button>
                                <button>Download</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="pagination-report">
                <button>Prev</button>
                <div className="page-number">
                    1
                </div>
                <button>Next</button>
            </div>
        </div>
    )
}

export default Report