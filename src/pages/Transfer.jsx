import "../styles/transfer.css"

function Transfer() {
    return(
        <div className="transfer-page">
            <div className="transfer-header">
                <div>
                    <h1>Transfer Banking</h1>
                    <p>Lakukan transfer antar rekening dengan aman</p>
                </div>
            </div>
            <div className="transfer-container">
                <form className="transfer-form">
                    <div className="form-group">
                        <label>Rekening Sumber</label>
                        <select>
                            <option>Pilih Rekening</option>
                            <option>BCA - 1234567890</option>
                            <option>BRI - 9876543210</option>
                            <option>Mandiri - 1122334455</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Bank Tujuan</label>
                        <select>
                            <option>Pilih Bank</option>
                            <option>BCA</option>
                            <option>BRI</option>
                            <option>BNI</option>
                            <option>Mandiri</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Nomor Rekening</label>
                        <input
                            type="text"
                            placeholder="Masukkan nomor rekening"
                        />
                    </div>
                    <div className="form-group">
                        <label>Nama Penerima</label>
                        <input
                            type="text"
                            placeholder="Masukkan nama penerima"
                        />
                    </div>
                    <div className="form-group">
                        <label>Nominal Transfer</label>

                        <input
                            type="number"
                            placeholder="Masukkan nominal transfer"
                        />
                    </div>
                    <div className="form-group">
                        <label>Catatan</label>
                        <textarea
                            rows="4"
                            placeholder="Tambahkan catatan transfer"
                        ></textarea>
                    </div>
                    <div className="transfer-action">
                        <button type="submit">
                            Kirim Transfer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Transfer