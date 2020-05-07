import React, { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import MDReactComponent from 'markdown-react-js';
import { CURRENT_LANG_KEY } from '../../../actions';
import 'antd/dist/antd.css';
import '../RuleGame/RuleGame.scss';

const gameRuleContent_en = `###### **CONDITIONS OF PARTICIPATION**
*  As a member of EduNetwork and does not violate any provision on EduNetwork.

###### **RULES**
* Each Edunetwork member who has 1 sale will receive a lucky draw of 100%.
* When the lucky spin starts, the member has a chance to receive the corresponding bonuses on the spin.
* The TOP 50 members with the highest Sale corresponding to the highest number of turns will be updated on the rankings.

###### **REGULATIONS**
*  Members are not allowed to use the software to disrupt and adjust the results of the Lucky Draw. If violating this regulation and discovered, members will be permanently locked account at EduNetwork.
*  The amount of member drawn will be deposited directly into that member's wallet account.`

const gameRuleContent_vn = `###### **ĐIỀU KIỆN THAM GIA**
*  Là thành viên của EduNetwork và không vi phạm bất kỳ quy định nào trên EduNetwork.

###### **THỂ LỆ**
* Mỗi thành viên Edunetwork khi có 1 Sale phát sinh sẽ được nhận 1 lượt quay may mắn 100% trúng.
* Khi Vòng quay may mắn bắt đầu khởi động, thành viên có cơ hội nhận được những số tiền thưởng tương ứng trên vòng quay.
* TOP 50 thành viên có số Sale cao nhất tương ứng với có số lượt quay nhiều nhất sẽ được cập nhật trên bảng xếp hạng.

###### **QUY ĐỊNH**
* Thành viên không được sử dụng phần mềm để gây rối, điều chỉnh kết quả của Vòng quay may mắn. Nếu vi phạm quy định này và bị phát hiện, thành viên sẽ bị khóa tài khoản vĩnh viễn tại EduNetwork.
* Số tiền thành viên đã quay trúng thưởng sẽ được nạp trực tiếp vào tài khoản Ví của thành viên đó.`

const RuleGame = () => {
  const [currentLanguage, setCurrentLanguage] = useState('');

  useEffect(() => {
    let current_language =
      window.localStorage.getItem(CURRENT_LANG_KEY) || 'en';
    setCurrentLanguage(current_language);
  });
  return (
    <React.Fragment>
      <Row>
        <Col span={24} className="rule_content__container">
          {currentLanguage === 'en' ? (
            <MDReactComponent text={gameRuleContent_en} />
          ) : (
            <MDReactComponent text={gameRuleContent_vn} />
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default RuleGame;
