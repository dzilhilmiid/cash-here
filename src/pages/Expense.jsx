import "../styles/expense.css"

function Expense() {
    return (
        <div className="expense-page">
            <div className="expense-header">
                <div>
                    <h1>Uang Keluar</h1>
                    <p>Monitor dan kelola seluruh transaksi pengeluaran bisnis</p>
                </div>

                <button className="add-btn">
                    + Tambah Pengeluaran
                </button>
            </div>
            <div className="expense-summary">
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
            <div className="expense-filter">
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
            <div className="expense-chart">
                <div className="section-header">
                    <h3>Statistik Pengeluaran</h3>
                </div>
                <div className="chart-container">
                </div>
            </div>
            <div className="expense-table-section">
                <div className="section-header">
                    <h3>Riwayat Pengeluaran</h3>
                </div>
                <table className="expense-table">
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
            <div className="pagination-expense">
                <button>Prev</button>
                <div className="page-number">
                    1
                </div>
                <button>Next</button>
            </div>
        </div>
    )
}

export default Expense