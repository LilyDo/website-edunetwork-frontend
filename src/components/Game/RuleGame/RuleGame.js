import React from 'react';
import {
    Typography
} from 'antd';
import 'antd/dist/antd.css';

const RuleGame = () => {
    return (
        <React.Fragment>
            <Typography.Paragraph>
                THỂ LỆ
                •  Mỗi thành viên sẽ được Edunetwork tặng số lượt quay may mắn tương ứng với số thành viên đang quản lý.
                •  Khi Vòng quay may mắn bắt đầu khởi động, thành viên có cơ hội nhận được những số tiền thưởng tương ứng trên vòng quay.
                LƯU Ý
                Nếu lượt quay của thành viên chưa hết thì sẽ được Admin bảo lưu lại để quay tiếp ở những vòng sau

                ĐIỀU KIỆN THAM GIA
                •  Là thành viên của EduNetwork
                •  Chủ tài khoản là người thật, không vi phạm bất kỳ quy định nào trên EduNetwork.

                QUY ĐỊNH:
                •  Thành viên không được sử dụng phần mềm để gây rối, điều chỉnh kết quả của Vòng quay may mắn. Nếu vi phạm quy định này và bị phát hiện, thành viên sẽ bị khóa tài khoản vĩnh viễn tại EduNetwork.
                •  Số tiền thành viên đã quay trúng thưởng sẽ được nạp trực tiếp vào tài khoản Ví của thành viên đó. Không chấp nhận việc sang nhượng hay chuyển đổi dưới mọi hình thức cho thành viên khác.
            </Typography.Paragraph>
        </React.Fragment>
    );
};

export default RuleGame;