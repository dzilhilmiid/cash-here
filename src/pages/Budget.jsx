import "../styles/budget.css"

function Budget() {
    return(
        <div className="budget-page">
            <div className="budget-header">
                <div>
                    <h1>Budget</h1>
                    <p>
                        Kelola dan pantau anggaran bisnis secara efisien
                    </p>
                </div>

                <div className="budget-action">
                    <button className="add-budget-btn">
                        + Tambah Budget
                    </button>
                    <button className="export-btn">
                        Export Excel
                    </button>
                </div>
            </div>

            <div className="budget-summary">
                <div className="budget-card">
                    <span>Total Budget</span>
                    <h2>Rp 200.000.000</h2>
                </div>

                <div className="budget-card">
                    <span>Budget Terpakai</span>
                    <h2>Rp 125.000.000</h2>
                </div>

                <div className="budget-card">
                    <span>Sisa Budget</span>
                    <h2>Rp 75.000.000</h2>
                </div>

                <div className="budget-card">
                    <span>Penggunaan</span>
                    <h2>62.5%</h2>
                </div>
            </div>

            <div className="budget-filter">
                <input
                    type="text"
                    placeholder="Cari Budget..."
                />

                <select>
                    <option>Semua Budget</option>
                    <option>Budget Operasional</option>
                    <option>Budget Keuangan</option>
                    <option>Budget Tetap</option>
                    <option>Budget Fleksibel</option>
                </select>

                <input type="date" />

                <button>
                    Filter
                </button>
            </div>

            <div className="budget-progress-section">
                <div className="section-header">
                    <h3>Progress Penggunaan Budget</h3>
                </div>

                <div className="budget-progress-card">
                    <div className="progress-info">
                        <span>Budget Keuangan</span>
                        <span>80%</span>
                    </div>

                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: "80%" }}
                        ></div>
                    </div>
                </div>

                <div className="budget-progress-card">
                    <div className="progress-info">
                        <span>Budget Operasional</span>
                        <span>65%</span>
                    </div>

                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: "65%" }}
                        ></div>
                    </div>
                </div>

                <div className="budget-progress-card">
                    <div className="progress-info">
                        <span>Budget Fleksibel</span>
                        <span>45%</span>
                    </div>

                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: "45%" }}
                        ></div>
                    </div>
                </div>
            </div>

            <div className="budget-table-section">
                <div className="section-header">
                    <h3>Daftar Budget</h3>
                </div>

                <table className="budget-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Divisi</th>
                            <th>Periode</th>
                            <th>Budget</th>
                            <th>Terpakai</th>
                            <th>Sisa</th>
                            <th>Status</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>#BDG001</td>
                            <td>Marketing</td>
                            <td>Juni 2026</td>
                            <td>Rp 50.000.000</td>
                            <td>Rp 40.000.000</td>
                            <td>Rp 10.000.000</td>

                            <td>
                                <span className="active">
                                    Aktif
                                </span>
                            </td>

                            <td>
                                <button>Detail</button>
                                <button>Edit</button>
                            </td>
                        </tr>

                        <tr>
                            <td>#BDG002</td>
                            <td>Operasional</td>
                            <td>Juni 2026</td>
                            <td>Rp 80.000.000</td>
                            <td>Rp 52.000.000</td>
                            <td>Rp 28.000.000</td>

                            <td>
                                <span className="active">
                                    Aktif
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

            <div className="pagination-budget">
                <button>Prev</button>

                <div className="page-number">
                    1
                </div>

                <button>Next</button>
            </div>
        </div>
    )
}

export default Budget