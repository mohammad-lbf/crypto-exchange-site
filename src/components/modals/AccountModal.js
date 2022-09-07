import React from 'react';

const AccountModal = () => {
    return (
        <div>
            <div className="modal fade" id="AccountModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header d-flex flex-row-reverse justify-content-between">
                      <h5 className="modal-title" id="exampleModalLabel">ورود به حساب کاربری</h5>
                      <button type="button" className="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <p className="text-end mt-4 fs-13">
                    جهت ورود به حساب کاربری خود، شماره تلفن همراه خود را وارد کنید
                    </p>
                    <input type="text" className="form-control mt-3 text-end" placeholder="شماره تلفن همراه" />
                    </div>
                    <div className="modal-footer d-flex border-0 justify-content-between">
                      <button type="button" className="btn btn-secondary rounded-pill px-4 py-2" data-bs-dismiss="modal">
                        <p className="mb-0 fs-13">انصراف</p>
                      </button>
                      <button type="button" className="text-white px-4 py-2 rounded-pill bg-main-2 border-0" data-bs-dismiss="modal">
                      <p className="mb-0 fs-13">ورود به حساب کاربری</p>
                        </button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default AccountModal;