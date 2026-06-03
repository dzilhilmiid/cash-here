import "../styles/income.css"

function Income() {
    return (
        <div className="income-page">
            <div className="income-header">
                <div>
                    <h1>Uang Masuk</h1>
                    <p>Monitor dan kelola seluruh transaksi pemasukan bisnis</p>
                </div>

                <button className="add-btn">
                    + Tambah Pemasukan
                </button>
            </div>
            <div className="income-summary">
                <div className="summary-card">
                    <span>Total Hari Ini</span>
                    <h2>Rp 2.500.000</h2>
                </div>
                <div className="summary-card">
                    <span>Total Minggu Ini</span>
                    <h2>Rp 12.400.000</h2>
                </div>
                <div className="summary-card">
                    <span>Total Bulan Ini</span>
                    <h2>Rp 45.000.000</h2>
                </div>
                <div className="summary-card">
                    <span>Total Transaksi</span>
                    <h2>152</h2>
                </div>
            </div>
            <div className="income-filter">
                <input
                    type="text"
                    placeholder="Cari transaksi..."
                />
                <select>
                    <option>Semua Metode</option>
                    <option>Cash</option>
                    <option>Transfer</option>
                    <option>E-Wallet</option>
                </select>
                <input type="date" />
                <button>
                    Filter
                </button>
            </div>
            <div className="income-chart">
                <div className="section-header">
                    <h3>Statistik Pemasukan</h3>
                </div>
                <div className="chart-container">
                </div>
            </div>
            <div className="income-table-section">
                <div className="section-header">
                    <h3>Riwayat Pemasukan</h3>
                </div>
                <table className="income-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tanggal</th>
                            <th>Keterangan</th>
                            <th>Kategori</th>
                            <th>Metode</th>
                            <th>Nominal</th>
                            <th>Status</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#TRX001</td>
                            <td>21 Mei 2026</td>
                            <td>Penjualan Produk</td>
                            <td>Penjualan</td>
                            <td>Transfer</td>
                            <td>Rp 1.200.000</td>
                            <td>
                                <span className="success">
                                    Berhasil
                                </span>
                            </td>
                            <td>
                                <button>Detail</button>
                                <button>Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="pagination-income">
                <button>Prev</button>
                <div className="page-number">
                    1
                </div>
                <button>Next</button>
            </div>
        </div>
    )
}

export default Income