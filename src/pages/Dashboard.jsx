import "../styles/dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Selamat Datang 👋</h1>
                <p>
                    Cash-Here siap membantu mengelola keuanganmu dengan lebih mudah.
                </p>
            </div>

            <div className="summary-section">
                <div className="summary-header">
                    <div className="summary-title">
                        <h2>Ringkasan Keuangan</h2>
                        <p>Pantau kondisi keuanganmu secara real-time</p>
                    </div>
                    <div className="summary-filter">
                        <div className="filter-group">
                            <label htmlFor="search">Cari Transaksi</label>
                            <input type="text" id="search" placeholder="Cari...." />
                        </div>
                        <div className="filter-group">
                            <label htmlFor="date">Tanggal</label>
                            <input type="date" id="date" />
                        </div>
                        <div className="filter-group">
                            <label htmlFor="category">Kategori</label>
                            <select name="category" id="category">
                                <option value="pemasukan">Pemasukan</option>
                                <option value="pengeluaran">Pengeluaran</option>
                                <option value="transfer">Transfer</option>
                                <option value="laporan">Laporan</option>
                                <option value="budget">Budget</option>
                                <option value="tabungan">Tabungan</option>
                            </select>
                        </div>
                        <button className="search-btn">
                            Cari
                        </button>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card income">
                        <h3>Total Pemasukan</h3>
                        <h1>Rp 12.500.000</h1>
                        <span>+12% dari bulan lalu</span>
                    </div>

                    <div className="card expense">
                        <h3>Total Pengeluaran</h3>
                        <h1>Rp 7.200.000</h1>
                        <span>+5% dari bulan lalu</span>
                    </div>

                    <div className="card report">
                        <h3>Laporan Bulanan</h3>
                        <h1>24</h1>
                        <span>Total transaksi bulan ini</span>
                    </div>

                    <div className="card budget">
                        <h3>Sisa Budget</h3>
                        <h1>Rp 3.800.000</h1>
                        <span>75% budget telah digunakan</span>
                    </div>
                </div>

                <div className="saving-card">
                    <div className="saving-header">
                        <div>
                            <h2>Target Tabungan</h2>
                            <p>Progress tabungan bulan ini</p>
                        </div>
                        <h3>65%</h3>
                    </div>

                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>

                    <div className="saving-info">
                        <span>Rp 6.500.000 terkumpul</span>
                        <span>Target Rp 10.000.000</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;