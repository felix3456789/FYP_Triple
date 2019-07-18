import React, { Component } from "react";
import Form from "../../common/form";
class Register extends Form {
  state = {
    data: {
      newAccount: "",
      newPassword: "",
      ConfirmPassword: "",
      chineseName: "",
      engName: "",
      birthday: "",
      email: ""
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("handleSubmit Register", this.state.data);
    this.props.onSubmit(this.state.data, 2);
  };
  render() {
    return (
      <React.Fragment>
        <form Style="display: inline" onSubmit={e => this.handleSubmit(e)}>
          <div className="register__layout">
            <div>
              <span className="register__title">註冊</span>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="newAccount"
                    name="newAccount"
                    type="text"
                    className="validate loginBox__input"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="newAccount">會員帳號</label>
                </div>
                <div className="input-field col s12">
                  <input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    className="validate loginBox__input"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="newPassword">密碼</label>
                </div>
                <div className="input-field col s12">
                  <input
                    id="ConfirmPassword"
                    name="ConfirmPassword"
                    type="password"
                    className="validate loginBox__input"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="ConfirmPassword">確認密碼</label>
                </div>
                <div className="input-field col s12">
                  <input
                    id="chineseName"
                    name="chineseName"
                    type="text"
                    className="validate loginBox__input"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="chineseName">英文姓氏</label>
                </div>
                <div className="input-field col s12">
                  <input
                    id="engName"
                    name="engName"
                    type="text"
                    className="validate loginBox__input"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="engName">英文名字</label>
                </div>

                <div className="input-field col s12">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="validate loginBox__input"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="email">電郵地址</label>
                </div>
              </div>
            </div>
          </div>
          <div className="register__tnc--layout">
            <h5> 隱私權與著作權保護</h5>
            Triple
            的《隱私權政策》會說明當您使用「服務」時，我們會如何處理您的個人資料並保護您的隱私權。您使用「服務」，即表示您同意
            Triple 可依據我們的隱私權政策的規定使用這類資料。
            我們會按照美國《數位千禧年著作權法》所規定的程序，對涉嫌著作權侵權通知做出回應，並終止一再侵權者的帳戶。
            我們會提供相關資訊，協助著作權人在線上管理其智慧財產。如果您認為有人侵犯您的著作權而需要通知我們，可以前往我們的「說明中心」，瞭解如何提出通知，並查詢
            Triple 有關通知回應的政策規定。
            <br />
            <h5>您儲存在「服務」中的內容</h5>
            部分「服務」可讓您上傳、提交、儲存、傳送或接收內容；您仍保有相關內容中您擁有的智慧財產權。簡而言之，屬於您的依舊是您的。
            當您將內容上載、提交、儲存或傳送到「服務」，或在「服務」接收內容，或透過「服務」進行以上操作時，即表示您授予
            Triple (及我們的合作夥伴)
            全球通用的授權，可使用、代管、儲存、重製、修改、製作衍生作品
            (例如翻譯、改編或變更您的內容，使其更加配合我們的「服務」)、傳播、發佈、公開操作、公開展示與散佈這類內容。您於本項授權授予的權利僅限用於營運、宣傳與改善「服務」，以及開發新的服務。即使您停止使用「服務」，本項授權仍持續具有效力
            (例如對您先前加到「Triple
            地圖」之商家資訊的授權)。部分「服務」可讓您存取與移除先前提交至該「服務」的內容。此外，某些「服務」會有條款或設定縮限我們對提交至該類「服務」之內容的使用範圍。請確認您擁有必要權利，可就您提交至「服務」的任何內容授予我們本項授權。
            我們的自動系統會分析您的內容
            (包括電子郵件)，以提供與您個人相關的產品功能，例如自訂搜尋結果、個人化廣告，以及垃圾內容與惡意軟體偵測功能。當您使用我們的系統傳送、接收及儲存內容時，系統就會進行分析。
            如果您擁有 Triple 帳戶，我們可能會在 Triple
            的「服務」(包括廣告和其他商業內容)
            中顯示您的個人資料名稱和相片，以及您在 Triple 或您的 Triple
            帳戶所連結的第三方應用程式中的動態 (例如
            +1、您撰寫的評論以及您發表的留言)。我們會尊重您在 Triple
            帳戶中選擇的分享或公開程度設定。舉例來說，您可以設定不在廣告中顯示自己的名稱和相片。
            如要進一步瞭解 Triple
            使用與儲存內容的方式，請參閱相關「服務」的隱私權政策或附加條款。如果您就「服務」提供意見或建議，我們可使用您的意見或建議，對您不負任何義務。
          </div>
          <div className="login__btnGroup centre">
            <button
              type="button"
              onClick={this.props.closePopup}
              className="waves-effect waves-light btn-small loginBox__btn loginBox__btn--register"
            >
              取消
            </button>
            <button
              type="submit"
              className="waves-effect waves-light btn-small loginBox__btn loginBox__btn--login"
            >
              註冊
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Register;
