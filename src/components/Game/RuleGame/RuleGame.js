import React, {useState , useEffect } from 'react';
import {
    Layout, Row, Col
} from 'antd';
import MDReactComponent from 'markdown-react-js';
import { CURRENT_LANG_KEY } from '../../../actions';
import 'antd/dist/antd.css';
import '../RuleGame/RuleGame.css';

const gameRuleContent_en = `###### **RULES**
*  Each member will be given lucky draw by Edunetwork corresponding to the number of members currently managing. 
*  When the lucky spin starts, the member has a chance to receive the corresponding bonuses on the wheel. 
###### **NOTE**
* If the member's turn is not over, Admin will save it for later rounds

###### **CONDITIONS OF PARTICIPATION**
*  As a member of EduNetwork
*  The account owner is real, does not violate any regulations on EduNetwork.

###### **REGULATIONS**:
*  Members are not allowed to use the software to disrupt and adjust the results of the Lucky Draw. If violating this regulation and discovered, members will be permanently locked account at EduNetwork.
*  The amount of member drawn will be deposited directly into that member's wallet account. No transfer or transfer in any form to another member.`

const gameRuleContent_vn = `###### **THỂ LỆ**
*  Mỗi thành viên sẽ được Edunetwork tặng số lượt quay may mắn tương ứng với số thành viên đang quản lý. 
*  Khi Vòng quay may mắn bắt đầu khởi động, thành viên có cơ hội nhận được những số tiền thưởng tương ứng trên vòng quay. 
###### **LƯU Ý**
* Nếu lượt quay của thành viên chưa hết thì sẽ được Admin bảo lưu lại để quay tiếp ở những vòng sau

###### **ĐIỀU KIỆN THAM GIA**
*  Là thành viên của EduNetwork
*  Chủ tài khoản là người thật, không vi phạm bất kỳ quy định nào trên EduNetwork.

###### **QUY ĐỊNH**:
*  Thành viên không được sử dụng phần mềm để gây rối, điều chỉnh kết quả của Vòng quay may mắn. Nếu vi phạm quy định này và bị phát hiện, thành viên sẽ bị khóa tài khoản vĩnh viễn tại EduNetwork.
*  Số tiền thành viên đã quay trúng thưởng sẽ được nạp trực tiếp vào tài khoản Ví của thành viên đó. Không chấp nhận việc sang nhượng hay chuyển đổi dưới mọi hình thức cho thành viên khác.`

const RuleGame = () => {

    const [currentLanguage, setCurrentLanguage] = useState('');

    useEffect(() => {
        let current_language = window.localStorage.getItem(CURRENT_LANG_KEY) || 'en';
        setCurrentLanguage(current_language);
    })
    return (
        <React.Fragment>
            <Row>
                <Col span={24}
                    className="rule_content__container"
                >
                    {currentLanguage === 'en' ? (
                        <MDReactComponent
                        text={gameRuleContent_en}
                        />
                    ) : (
                        <MDReactComponent
                        text={gameRuleContent_vn}
                        />
                    )}
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default RuleGame;