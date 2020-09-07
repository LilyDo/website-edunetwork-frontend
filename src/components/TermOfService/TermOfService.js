import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './TermOfService.scss';
import { CURRENT_LANG_KEY } from '../../actions';

class TermOfService extends Component {
  render() {
    let currentLang = localStorage.getItem(CURRENT_LANG_KEY) || 'en';
    return (
      <div>
        <div className="ContactPage">
          <p>
            {(currentLang === "en")? (
              <React.Fragment>
                Terms of Use
                <br />
                Edunetwork’s mission is to improve lives through learning.
                We enable anyone anywhere to enroll in these educational
                courses to learn. We consider our model the best way to
                offer valuable educational content to our users.
                Therefore, we need rules to keep our platform and services
                safe for you, us and our instructors. These Terms apply to
                all your activities on the Edunetwork website, our APIs
                and other related services (“Services”).
                <br />
                1/ Accounts
                <br />
                You need an account for most activities on our platform,
                including to purchase a course or to apply to become an
                affiliate. When setting up and maintaining your account,
                you must provide and continue to provide accurate and
                complete information, including a valid email address. You
                have complete responsibility for your account and
                everything that happens on your account, including for any
                harm or damage (to us or anyone else) caused by someone
                using your account without your permission. This means you
                need to be careful with your password. You may not
                transfer your account to someone else or use someone
                else’s account without their permission. If you contact us
                to request access to an account, we will not grant you
                such access unless you can provide us the login credential
                information for that account. In the event of the death of
                a user, the account of that user will be closed.
                <br />
                If you share your account login credential with someone
                else, you are responsible for what happens with your
                account and Edunetwork will not intervene in disputes
                between users who have shared account login credentials.
                You must notify us immediately upon learning that someone
                else may be using your account without your permission (or
                if you suspect any other breach of security) by contacting
                our Support Center. We may request some information from
                you to confirm that you are indeed the owner of your
                account.
                <br />
                Users must be at least 18 years of age to create an
                account on Edunetwork and use the Services. If you are
                younger than the required age, you may not set up an
                account, but we encourage you to invite a parent or
                guardian to open an account and help you enroll in courses
                that are appropriate for you. If we discover that you have
                created an account and you are younger than the required
                age for consent to use online services in your country, we
                will terminate your account. You can terminate your
                account at any time by contacting our Support Center.
                Check our Privacy Policy to see what happens when you
                terminate your account.
                <br />
                2/ Course Enrollment and Lifetime Access
                <br />
                Under our Instructor Agreement, when instructors publish a
                course on Edunetwork, they grant Edunetwork a license to
                offer a license to the course to our users. This means
                that we have the right to sublicense the course to the
                users who enroll in the course. When you enroll in a
                course, you are getting from Edunetwork a license to view
                the course via the Edunetwork platform and Services, and
                Edunetwork is the licensor of record. Courses are
                licensed, and not sold, to you. This license does not give
                you any right to resell the course in any manner
                (including by sharing account information with a purchaser
                or illegally downloading the course and sharing it on
                third-party sites).
                <br />
                In legal, more complete terms, Edunetwork grants you (as a
                user) a limited, non-exclusive, non-transferable license
                to access and view the courses and associated content for
                which you have paid all required fees, solely for your
                personal, non- commercial, educational purposes through
                the Services, in accordance with these Terms and any
                conditions or restrictions associated with a particular
                courses or feature of our Services. All other uses are
                expressly prohibited. You may not reproduce, redistribute,
                transmit, assign, sell, broadcast, rent, share, lend,
                modify, adapt, edit, create derivative works of,
                sublicense, or otherwise transfer or use any course unless
                we give you explicit permission to do so in a written
                agreement signed by a Edunetwork authorized
                representative. This also applies to content you can
                access via any of our APIs.
                <br />
                We generally give a lifetime access license to our users
                when they enroll in a course. However, we reserve the
                right to revoke any license to access and use courses at
                any point in time in the event where we decide or are
                obligated to disable access to a course due to legal or
                policy reasons, for example, if the course you enrolled in
                is the object of a copyright complaint, or if we determine
                its content violates our Trust & Safety Guidelines. The
                lifetime access is not applicable to add-on features and
                services associated with a course, for example translation
                captions of courses may be disabled at any time, and an
                instructor may decide at any time to no longer provide
                teaching assistance or Q&A services in association with a
                course.
                <br />
                3/ Payments and Refunds
                <br />
                3.1 Pricing
                <br />
                The prices of courses on Edunetwork are determined based
                on the terms of the Instructor Agreement and our Pricing
                and Promotions Policy.
                <br />
                We may run promotions and sales for our courses and
                certain courses are only available at discounted prices
                for a set period of time. The price applicable to a course
                will be the price at the time you complete your purchase
                of the course (at checkout). Any price offered for a
                particular course may also be different when you are
                logged into your account from the price available to users
                who aren’t registered or logged in, because some of our
                promotions are available to new users only.
                <br />
                If you are a user located in a country where use and sales
                tax, goods and services tax, or value added tax is
                applicable to consumer sales, we are responsible for
                collecting and remitting the tax to the proper tax
                authorities. In certain countries, the price you see may
                include such taxes.
                <br />
                3.2 Payments
                <br />
                You agree to pay the fees for courses that you purchase,
                and you authorize us to charge your account available
                balance for those fees. Edunetwork works with third party
                payment processing partners to offer you the most
                convenient payment methods in your country and to keep
                your payment information secure.
                <br />
                When you make a deposit to your account, you agree not to
                use an invalid or unauthorized payment method. Edunetwork
                reserves the right to disable access to any course for
                which we detect fraudulent payments.
                <br />
                In any case, once your purchase is confirmed, you cannot
                cancel your order for a refund. We do not provide credit
                or refunds for any confirmed purchases. Please check
                carefully before making a payment transaction.
                <br />
                4/ Content Rules
                <br />
                If we are put on notice that a course or content violates
                the law or the rights of others (for example, if it is
                established that it violates intellectual property or
                image rights of others, or is about an illegal activity),
                if we discover that a content violates our Trust & Safety
                Guidelines, or if we believe that content is unlawful,
                inappropriate, or objectionable (for example if you
                impersonate someone else), we may remove it from our
                platform. Edunetwork complies with copyright laws.
                <br />
                Edunetwork has discretion in enforcing these Terms and our
                Trust & Safety Guidelines. We may terminate or suspend
                your permission to use our platform and Services or ban
                your account at any time, with or without notice, for any
                violation of these Terms, upon the request of law
                enforcement or government agencies, for extended periods
                of inactivity, for unexpected technical issues or
                problems, or if we suspect that you engage in fraudulent
                or illegal activities. Upon any such termination we may
                delete your account, and we may prevent you from further
                access to the platforms and use of our Services. You agree
                that we will have no liability to you or any third party
                for termination of your account, removal of a content, or
                blocking of your access to our platforms and services.
                <br />
                If you find a course infringes your copyright or trademark
                rights, please let us know. Under our Instructor
                Agreement, we require our instructors to follow the law
                and respect the intellectual property rights of others.
                For more details on how to file a copyright or trademark
                infringement claim with us, please contact our Customer
                Center.
                <br />
                5/ Using Edunetwork for Learning
                <br />
                Our principal mission is to improve lives through
                learning. When purchasing a course in our platform, you
                agree that your sole purpose is to acquire new knowledge
                and/or skills throughout the course.
                <br />
                When we find you misuse our learning platform, for
                example, if you purchase a course solely to become an
                affiliate, we reserve the right to suspend or terminate
                your account and/or block your access to our services.
                <br />
                6/ Using Edunetwork at Your Own Risk
                <br />
                Anyone can use Edunetwork to access courses for learning
                purposes. Like any other learning platforms where a lot of
                content is published, some things can go wrong, and you
                use Edunetwork at your own risk.
                <br />
                Edunetwork hosts many courses on our online learning
                platform. We are not in a position to determine the
                legality of course content. We do not exercise any
                editorial control over the courses that are available on
                the platform and, as such, do not guarantee in any manner
                the reliability, validity, accuracy or truthfulness of the
                courses. If you enroll in a course, you rely on any
                information provided by an instructor at your own risk.
                <br />
                By using the Services, you may be exposed to content that
                you consider offensive, indecent, or objectionable.
                Edunetwork has no responsibility to keep such content from
                you and no liability for your access or enrollment in any
                course, to the extent permissible under applicable law.
                This also applies to any courses relating to health,
                wellness and physical exercise. You acknowledge the
                inherent risks and dangers in the strenuous nature of
                these types of courses, and by enrolling in such courses,
                you choose to assume those risks voluntarily, including
                risk of illness, bodily injury, disability, or death. You
                assume full responsibility for the choices you make
                before, during and after your enrollment in a course.
                <br />
                We do not hire or employ instructors nor are we
                responsible or liable for any issue kinvolved between
                instructors and users. We are not liable for disputes,
                claims, losses, injuries, or damage of any kind that might
                arise out of or relate to the conduct of instructors or
                users.
                <br />
                When you use our Services, you may find links to other
                websites that we don’t own or control. We are not
                responsible for the content or any other aspect of these
                third-party sites, including their collection of
                information about you. You should also read their terms
                and conditions and privacy policies.
                <br />
                7/ Edunetwork’s Rights
                <br />
                All right, title, and interest in and to the Edunetwork
                platform and Services, including our website, our existing
                or future applications, our APIs, databases, and the
                content our employees or partners submit or provide
                through our Services (but excluding content provided by
                instructors) are and will remain the exclusive property of
                Edunetwork and its licensors. Our platforms and services
                are protected by copyright, trademark, and other laws of
                both Singapore and foreign countries. Nothing gives you a
                right to use the Edunetwork name or any of the Edunetwork
                trademarks, logos, domain names, and other distinctive
                brand features. Any feedback, comments, or suggestions you
                may provide regarding Edunetwork or the Services is
                entirely voluntary and we will be free to use such
                feedback, comments, or suggestions as we see fit and
                without any obligation to you.
                <br />
                You may not do any of the following while accessing or
                using the Edunetwork platform and Services:
                <br />
                - access, tamper with, or use non-public areas of the
                platform, Edunetwork’s computer systems, or the technical
                delivery systems of Edunetwork’s service providers.
                <br />
                - disable, interfere with, or try to circumvent any of the
                features of the platforms related to security or probe,
                scan, or test the vulnerability of any of our systems.
                <br />
                - copy, modify, create a derivative work of, reverse
                engineer, reverse assemble, or otherwise attempt to
                discover any source code of or content on the Edunetwork
                platform or Services.
                <br />
                - access or search or attempt to access or search our
                platform by any means (automated or otherwise) other than
                through our currently available search functionalities
                that are provided via our website, mobile apps, or API
                (and only pursuant to those API terms and conditions). You
                may not scrape, spider, use a robot, or use other
                automated means of any kind to access the Services.
                <br />
                - in any way use the Services to send altered, deceptive,
                or false source-identifying information (such as sending
                email communications falsely appearing as Edunetwork); or
                interfere with, or disrupt, (or attempt to do so), the
                access of any user, host, or network, including, without
                limitation, sending a virus, overloading, flooding,
                spamming, or mail-bombing the platforms or services, or in
                any other manner interfering with or creating an undue
                burden on the Services.
                <br />
                8/ Miscellaneous Legal Terms
                <br />
                8.1 Binding Agreement
                <br />
                You agree that by registering, accessing or using our
                Services, you are agreeing to enter into a legally binding
                contract with Edunetwork. If you do not agree to these
                Terms, do not register, access, or otherwise use any of
                our Services.
                <br />
                If you are an instructor accepting these Terms and using
                our Services on behalf of a company, organization,
                government, or other legal entity, you represent and
                warrant that you are authorized to do so.
                <br />
                Any version of these Terms in a language other than
                English is provided for convenience and you understand and
                agree that the English language will control if there is
                any conflict.
                <br />
                These Terms (including any agreements and policies linked
                from these Terms) constitute the entire agreement between
                you and us (which include, if you are an instructor, the
                Instructor Agreement).
                <br />
                If any part of these Terms is found to be invalid or
                unenforceable by applicable law, then that provision will
                be deemed superseded by a valid, enforceable provision
                that most closely matches the intent of the original
                provision and the remainder of these Terms will continue
                in effect.
                <br />
                Even if we are delayed in exercising our rights or fail to
                exercise a right in one case, it doesn’t mean we waive our
                rights under these Terms, and we may decide to enforce
                them in the future. If we decide to waive any of our
                rights in a particular instance, it doesn’t mean we waive
                our rights generally or in the future.
                <br />
                The following sections shall survive the expiration or
                termination of these Terms: Sections 2 (Course Enrollment
                and Lifetime Access), 6 (Using Edunetwork at Your Own
                Risk), 7 (Edunetwork’s Rights), 8 (Miscellaneous Legal
                Terms).
                <br />
                8.2 Disclaimers
                <br />
                It may happen that our platform is down, either for
                planned maintenance or because something goes down with
                the site. It may happen that one of our instructors is
                making misleading statements in their course. It may also
                happen that we encounter security issues. These are just
                examples. You accept that you will not have any recourse
                against us in any of these types of cases where things
                don’t work out right. In legal, more complete language,
                the Services and their content are provided on an “as is”
                and “as available” basis. We (and our affiliates,
                suppliers, partners, and agents) make no representations
                or warranties about the suitability, reliability,
                availability, timeliness, security, lack of errors, or
                accuracy of the Services or their content, and expressly
                disclaim any warranties or conditions (express or
                implied), including implied warranties of merchantability,
                fitness for a particular purpose, title, and
                non-infringement. We (and our affiliates, suppliers,
                partners, and agents) make no warranty that you will
                obtain specific results from use of the Services. Your use
                of the Services (including any content) is entirely at
                your own risk. Some jurisdictions don’t allow the
                exclusion of implied warranties, so some of the above
                exclusions may not apply to you.
                <br />
                We may decide to cease making available certain features
                of the Services at any time and for any reason. Under no
                circumstances will Edunetwork or its affiliates,
                suppliers, partners or agents be held liable for any
                damages due to such interruptions or lack of availability
                of such features.
                <br />
                We are not responsible for delay or failure of our
                performance of any of the Services caused by events beyond
                our reasonable control, like an act of war, hostility, or
                sabotage; natural disaster; electrical, internet, or
                telecommunication outage; or government restrictions.
                <br />
                8.3 Limitation of Liability
                <br />
                There are risks inherent into using our Services, for
                example, if you enroll in a health and wellness course,
                and you injure yourself. You fully accept these risks and
                you agree that you will have no recourse to seek damages
                against even if you suffer loss or damage from using our
                platform and Services. In legal, more complete language,
                to the extent permitted by law, we (and our group
                companies, suppliers, partners, and agents) will not be
                liable for any indirect, incidental, punitive, or
                consequential damages (including loss of data, revenue,
                profits, or business opportunities, or personal injury or
                death), whether arising in contract, warranty, tort,
                product liability, or otherwise, and even if we’ve been
                advised of the possibility of damages in advance. Our
                liability (and the liability of each of our group
                companies, suppliers, partners, and agents) to you or any
                third parties under any circumstance is limited to the
                greater of one hundred dollars ($100). Some jurisdictions
                don’t allow the exclusion or limitation of liability for
                consequential or incidental damages, so some of the above
                may not apply to you.
                <br />
                8.4 Indemnification
                <br />
                If you behave in a way that gets us in legal trouble, we
                may exercise legal recourse against you. You agree to
                indemnify, defend (if we so request), and hold harmless
                Edunetwork, our group companies, and their officers,
                directors, suppliers, partners, and agents from an against
                any third-party claims, demands, losses, damages, or
                expenses (including reasonable attorney fees) arising from
                (a) the content you own, (b) your use of the Services (c)
                your violation of these Terms, or (d) your violation of
                any rights of a third party. Your indemnification
                obligation will survive the termination of these Terms and
                your use of the Services.
                <br />
                8.5 Governing Law and Jurisdiction
                <br />
                These Terms are governed by the laws of Singapore without
                reference to its choice or conflicts of law principles.
                Where the “Dispute Resolution” section below does not
                apply, you and we consent to the exclusive jurisdiction
                and venue of State Courts of Singapore.
                <br />
                8.6 Legal Actions and Notices
                <br />
                No action, regardless of form, arising out of or relating
                to this Agreement may be brought by either party more than
                one (1) year after the cause of action has accrued.
                <br />
                Any notice or other communication to be given hereunder
                will be in writing and given by registered or certified
                mail return receipt requested, or email (by us to the
                email associated with your account or by you to
                info@edunetwork.global). 8.7 Relationship Between Us
                <br />
                You and we agree that no joint venture, partnership,
                employment, contractor, or agency relationship exists
                between us. 8.8 No Assignment
                <br />
                You may not assign or transfer these Terms (or the rights
                and licenses granted under them). For example, if you
                registered an account as an employee of a company, your
                account cannot be transferred to another employee. We may
                assign these Terms (or the rights and licenses granted
                under them) to another company or person without
                restriction. Nothing in these Terms confers any right,
                benefit, or remedy on any third-party person or entity.
                You agree that your account is non-transferable and that
                all rights to your account and other rights under these
                Terms terminate upon your death.
                <br />
                9/ Updating These Terms
                <br />
                From time to time, we may update these Terms to clarify
                our practices or to reflect new or different practices
                (such as when we add new features), and Edunetwork
                reserves the right in its sole discretion to modify and/or
                make changes to these Terms at any time. If we make any
                material change, we will notify you using prominent means
                such as by email notice sent to the email address
                specified in your account or by posting a notice through
                our Services. Modifications will become effective on the
                day they are posted unless stated otherwise.
                <br />
                Your continued use of our Services after changes become
                effective shall mean that you accept those changes. Any
                revised Terms shall supersede all previous Terms.
                <br />
                10. How to Contact Us
                <br />
                The best way to get in touch with us is to contact our
                Support Center at info@edunetwork.global. We’d love to
                hear your questions, concerns, and feedback about our
                Services.
              </React.Fragment>
            ) : (
              <React.Fragment>
                Điều khoản sử dụng
                <br />
                Edunetwork có sứ mệnh làm cho cuộc sống trở nên tốt đẹp
                thông qua việc giáo dục và đào tạo. Chúng tôi giúp cho bất
                cứ ai ở bất cứ nơi đâu đều có thể đăng ký học các khóa học
                này. Edunetwork tin rằng mô hình của mình luôn cung cấp
                cho học viên những nội dung giáo dục có giá trị. Do đó,
                chúng tôi cần thiết lập các quy tắc để giữ cho nền tảng và
                dịch vụ của chúng tôi an toàn cho mọi người. Các Điều
                khoản này áp dụng cho tất cả các hoạt động trên trang web
                Edunetwork, giao diện lập trình ứng dụng và các dịch vụ
                khác có liên quan.
                <br />
                1. Tài khoản
                <br />
                Người dùng cần có một tài khoản cho hầu hết các hoạt động
                trên nền tảng của Edunetwork, bao gồm việc mua khóa học
                hoặc đăng ký trở thành học viên. Khi thiết lập và duy trì
                tài khoản của mình, bạn phải cung cấp thông tin đầy đủ và
                chính xác, bao gồm cả địa chỉ email hợp lệ. Bạn phải hoàn
                toàn chịu trách nhiệm về tài khoản và bất kì vấn đề gì xảy
                ra trên tài khoản của mình, bao gồm mọi thiệt hại (đối với
                Edunetwork hoặc bất kỳ ai khác) do người nào đó sử dụng
                tài khoản của bạn gây ra mà không có sự cho phép của bạn.
                Điều này có nghĩa là bạn cần cẩn thận với mật khẩu của
                mình, không được chuyển nhượng tài khoản của mình cho
                người khác hoặc sử dụng tài khoản của người khác mà không
                có sự cho phép của họ. Nếu người dùng liên hệ với
                Edunetwork để yêu cầu quyền truy cập vào tài khoản, chúng
                tôi sẽ không cấp quyền truy cập đó trừ khi người dùng có
                thể cung cấp được thông tin đăng nhập cho tài khoản đó.
                Trong trường hợp người dùng qua đời, tài khoản của người
                dùng đó sẽ bị đóng.
                <br />
                Nếu bạn chia sẻ thông tin đăng nhập tài khoản của mình với
                người khác, bạn phải chịu trách nhiệm cho những gì xảy ra
                với tài khoản của mình và Edunetwork sẽ không can thiệp
                vào tranh chấp giữa những người dùng đã chia sẻ thông tin
                đăng nhập tài khoản. Bạn phải thông báo cho chúng tôi ngay
                lập tức khi biết rằng người khác có thể đang sử dụng tài
                khoản của các bạn mà không có sự cho phép của các bạn
                (hoặc nếu các bạn nghi ngờ bất kỳ vi phạm bảo mật nào
                khác) bằng cách liên hệ với Trung tâm hỗ trợ của chúng
                tôi. Chúng tôi có thể yêu cầu một số thông tin từ các bạn
                để xác nhận rằng các bạn thực sự là chủ sở hữu tài khoản
                của mình.
                <br />
                Người dùng phải ít nhất đủ 18 tuổi để tạo tài khoản trên
                Edunetwork và sử dụng Dịch vụ. Nếu các bạn trẻ hơn độ tuổi
                cần thiết, các bạn có thể không lập tài khoản, nhưng chúng
                tôi khuyến khích các bạn mời phụ huynh hoặc người giám hộ
                mở tài khoản và giúp các bạn đăng ký các khóa học phù hợp
                với mình. Nếu chúng tôi phát hiện ra rằng các bạn đã tạo
                một tài khoản và các bạn trẻ hơn độ tuổi cần thiết khi
                đồng ý sử dụng các dịch vụ trực tuyến tại quốc gia của các
                bạn, chúng tôi sẽ chấm dứt tài khoản của các bạn.
                <br />
                Các bạn có thể chấm dứt tài khoản của mình bất cứ lúc nào
                bằng cách liên hệ với Trung tâm hỗ trợ của chúng tôi. Kiểm
                tra Chính sách bảo mật của chúng tôi để xem điều gì xảy ra
                khi các bạn chấm dứt tài khoản.
                <br />
                2. Ghi danh khóa học và truy cập trọn đời
                <br />
                Theo Thỏa thuận với giảng viên, khi các giảng viên đăng
                tải một khóa học trên Edunetwork, họ cấp cho Edunetwork
                một giấy phép để cung cấp khóa học đến người dùng. Có
                nghĩa là chúng tôi có quyền cấp phép khóa học cho người
                dùng đăng ký khóa học. Khi đăng ký một khóa học, bạn sẽ
                được Edunetwork cấp phép để xem khóa học thông qua nền
                tảng và dịch vụ của Edunetwork và Edunetwork là bên cấp
                phép hồ sơ. Các khóa học chỉ được cấp phép, và không được
                bán cho các bạn. Bạn không được quyền bán lại khóa học
                theo bất kỳ cách nào (bao gồm chia sẻ thông tin tài khoản
                hoặc tải xuống khóa học bất hợp pháp và chia sẻ nó trên
                các trang web của bên thứ ba).
                <br />
                Về mặt pháp lý, để các điều khoản đầy đủ hơn, Edunetwork
                cung cấp cho các bạn (với tư cách là người dùng) một quyền
                hạn hạn chế, không độc quyền, không thể chuyển nhượng, để
                bạn có thể truy cập và xem các khóa học và nội dung liên
                quan khi bạn đã thanh toán tất cả các khoản phí bắt buộc,
                bạn chỉ được sử dụng cho các mục đích cá nhân, phi thương
                mại, giáo dục thông qua các dịch vụ phù hợp với các Điều
                khoản này và mọi điều kiện hoặc hạn chế liên quan đến một
                khóa học hoặc tính năng cụ thể của Dịch vụ chúng tôi. Tất
                cả các sử dụng khác đều bị nghiêm cấm. Các bạn không được
                phép sao chép, phân phối lại, truyền, gán, bán, phát, cho
                thuê, chia sẻ, cho mượn, sửa đổi, điều chỉnh, chỉnh sửa,
                tạo các tác phẩm phái sinh, cấp phép lại hoặc chuyển
                nhượng hoặc sử dụng bất kỳ khóa học nào trừ khi chúng tôi
                cho phép các bạn làm như vậy theo thỏa thuận bằng văn bản
                được ký bởi đại diện ủy quyền của Edunetwork. Điều này
                cũng áp dụng cho nội dung mà các bạn có thể truy cập thông
                qua bất kỳ API nào của chúng tôi.
                <br />
                Chúng tôi thường cấp giấy phép truy cập trọn đời cho người
                dùng của mình khi họ đăng ký khóa học. Tuy nhiên, chúng
                tôi có quyền thu hồi bất kỳ giấy phép truy cập và sử dụng
                các khóa học tại bất kỳ thời điểm nào trong trường hợp
                chúng tôi quyết định hoặc có nghĩa vụ vô hiệu hóa quyền
                truy cập vào một khóa học vì lý do chính sách hoặc pháp
                lý, ví dụ, nếu khóa học các bạn đăng ký là đối tượng của
                khiếu nại bản quyền hoặc nếu chúng tôi xác định nội dung
                của nó vi phạm Nguyên tắc tin cậy và an toàn của chúng
                tôi. Quyền truy cập trọn đời không áp dụng cho các tính
                năng và dịch vụ bổ trợ được liên kết với một khóa học, ví
                dụ như các chú thích dịch thuật của các khóa học có thể bị
                vô hiệu hóa bất cứ lúc nào và giảng viên có thể quyết định
                bất kỳ lúc nào không cung cấp hỗ trợ giảng dạy hoặc dịch
                vụ hỏi đáp liên kết với một khóa học.
                <br />
                3. Thanh toán và hoàn tiền
                <br />
                3.1 Giá
                <br />
                Giá của các khóa học trên Edunetwork được xác định dựa
                trên các điều khoản Thỏa thuận với giảng viên và Chính
                sách giá và khuyến mãi của Edunetwork.
                <br />
                Edunetwork sẽ có những chương trình khuyến mãi cho từng
                khóa học và chỉ áp dụng trong thời gian nhất định. Giá áp
                dụng cho một khóa học sẽ là giá tại thời điểm mà người
                dùng hoàn thành việc mua khóa học (thời điểm thanh toán).
                Giá của khóa học có thể sẽ khác nhau khi bạn không đăng
                nhập hoặc đã đăng nhập vào tài khoản của mình, bởi vì một
                số chương trình khuyến mãi chỉ áp dụng cho người dùng mới.
                <br />
                Nếu người dùng đăng ký tài khoản tại quốc gia có áp dụng
                thuế cho việc bán hàng, thuế hàng hóa và dịch vụ hoặc thuế
                giá trị gia tăng được áp dụng đối với người tiêu dùng,
                Edunetwork có trách nhiệm thu và nộp thuế cho cơ quan thuế
                thích hợp. Tại một số quốc gia, giá hiển thị có thể đã bao
                gồm các loại thuế này.
                <br />
                3.2 Thanh toán
                <br />
                Người dùng đồng ý với các khoản phí mà Edunetwork đưa ra
                cho từng khóa học, và đồng ý cho Edunetwork trừ khoản phí
                này từ tài khoản của mình. Edunetwork làm việc với các đối
                tác thứ ba để cung cấp cho người dùng các phương thức
                thanh toán thuận tiện nhất ở quốc gia của các bạn và để
                bảo mật thông tin thanh toán của các bạn.
                <br />
                Người dùng gửi tiền vào tài khoản của mình bằng những
                phương thức thanh toán hợp lệ. Edunetwork có quyền vô hiệu
                hóa quyền truy cập vào bất kỳ khóa học nào mà chúng tôi
                phát hiện các khoản thanh toán gian lận.
                <br />
                Trong mọi trường hợp, khi giao dịch mua hàng đã được xác
                nhận, người dùng sẽ không được hủy đơn hàng để được hoàn
                tiền. Chúng tôi không cung cấp tín dụng hoặc hoàn lại tiền
                cho bất kỳ giao dịch mua đã được xác nhận. Vui lòng kiểm
                tra cẩn thận trước khi thực hiện thanh toán khóa học.
                <br />
                4. Nội quy
                <br />
                Nếu Chúng tôi phát hiện nội dung khóa học là vi phạm pháp
                luật hoặc quyền của người khác (ví dụ: vi phạm quyền sở
                hữu trí tuệ, quyền hình ảnh hoặc nó là một hoạt động bất
                hợp pháp), vi phạm Nguyên tắc tin cậy và an toàn của chúng
                tôi hoặc chúng tôi tin rằng nội dung đó là bất hợp pháp,
                không phù hợp hoặc bị phản đối (ví dụ: người dùng mạo danh
                người khác), chúng tôi có thể xóa nội dung đó khỏi nền
                tảng của chúng tôi. Edunetwork tuân thủ luật bản quyền.
                <br />
                Edunetwork có toàn quyền trong việc thực thi các Điều
                khoản này và Nguyên tắc tin cậy & an toàn của chúng tôi.
                Chúng tôi có thể chấm dứt hoặc đình chỉ việc cho phép
                người dùng sử dụng nền tảng và dịch vụ của chúng tôi hoặc
                cấm tài khoản của người dùng bất cứ lúc nào, có hoặc không
                có thông báo, đối với bất kỳ vi phạm các Điều khoản này,
                theo yêu cầu của cơ quan thực thi pháp luật hoặc cơ quan
                chính phủ, trong thời gian dài không hoạt động, đối với
                các sự cố hoặc vấn đề kỹ thuật không mong muốn hoặc nếu
                chúng tôi nghi ngờ rằng người dùng tham gia vào các hoạt
                động gian lận hoặc bất hợp pháp. Sau khi chấm dứt như vậy,
                chúng tôi có thể xóa tài khoản của người dùng và ngăn
                người dùng truy cập thêm vào các nền tảng và sử dụng Dịch
                vụ của chúng tôi. Người dùng đồng ý rằng chúng tôi sẽ
                không có trách nhiệm với các bạn hoặc bất kỳ bên thứ ba
                nào về việc chấm dứt tài khoản của các bạn, xóa nội dung
                hoặc chặn quyền truy cập của các bạn vào các nền tảng và
                dịch vụ của chúng tôi.
                <br />
                Nếu người dùng phát hiện một khóa học vi phạm bản quyền
                hoặc quyền thương hiệu của các bạn, xin vui lòng cho chúng
                tôi biết. Theo Thỏa thuận với giảng viên của chúng tôi,
                chúng tôi yêu cầu các giảng viên tuân thủ luật pháp và tôn
                trọng quyền sở hữu trí tuệ của người khác. Để biết thêm
                chi tiết về cách gửi khiếu nại vi phạm bản quyền hoặc
                thương hiệu với chúng tôi, vui lòng liên hệ với Trung tâm
                khách hàng của chúng tôi.
                <br />
                5. Sử dụng Edunetwork cho việc học
                <br />
                Nhiệm vụ chính của chúng tôi là cải thiện cuộc sống thông
                qua học tập. Khi mua một khóa học trong nền tảng của
                Edunetwork, bạn đồng ý rằng mục đích duy nhất của các bạn
                là có được kiến thức và / hoặc kỹ năng mới trong suốt khóa
                học.
                <br />
                Khi chúng tôi phát hiện người dùng sử dụng sai nền tảng
                học tập của chúng tôi, ví dụ: nếu các bạn mua một khóa học
                chỉ để trở thành thành viên, chúng tôi có quyền chấm dứt
                tình trạng thành viên của các bạn./ nếu bạn mua một khóa
                học chỉ để trở thành người môi giới, chúng tôi có quyền
                đình chỉ hoặc chấm dứt tài khoản của bạn và / hoặc chặn
                quyền truy cập của bạn vào các dịch vụ của chúng tôi.
                <br />
                6. Rủi ro khi sử dụng Edunetwork
                <br />
                Bất cứ ai cũng có thể sử dụng Edunetwork để truy cập các
                khóa học cho mục đích học tập. Giống như bất kỳ nền tảng
                học tập nào khác, nơi có rất nhiều nội dung được xuất bản,
                một số nội dung có thể sai và các bạn có thể gặp rủi ro
                khi sử dụng chúng tại Edunetwork.
                <br />
                Edunetwork tổ chức nhiều khóa học trên nền tảng học tập
                trực tuyến. Chúng tôi không ở vị trí để xác định tính hợp
                pháp của nội dung khóa học. Chúng tôi không thực hiện bất
                kỳ kiểm soát biên tập nào đối với các khóa học có sẵn trên
                nền tảng, do đó, không đảm bảo về mặt độ tin cậy, tính hợp
                lệ, tính chính xác hoặc tính trung thực của các khóa học.
                Nếu các bạn đăng ký khóa học, các bạn dựa vào bất kỳ thông
                tin do giảng viên cung cấp và chịu rủi ro.
                <br />
                Qua việc sử dụng Dịch vụ, các bạn có thể tiếp xúc với nội
                dung mà các bạn cho là xúc phạm, không đứng đắn hoặc phản
                cảm. Edunetwork không có trách nhiệm để những nội dung đó
                tránh xa các bạn và không chịu trách nhiệm cho việc các
                bạn truy cập hoặc đăng ký vào bất kỳ khóa học nào, trong
                phạm vi được phép theo luật hiện hành. Điều này cũng áp
                dụng cho bất kỳ khóa học liên quan đến y tế, sức khỏe và
                thể dục. Các bạn chấp nhận những rủi ro và nguy hiểm vốn
                có trong tính chất đòi hỏi của các loại khóa học này và
                qua việc đăng ký vào các khóa học đó, các bạn chọn chấp
                nhận những rủi ro đó một cách tự nguyện, bao gồm rủi ro về
                bệnh tật, thương tật, thương tật hoặc tử vong. Các bạn
                chịu trách nhiệm hoàn toàn cho các lựa chọn các bạn đưa ra
                trước, trong và sau khi đăng ký khóa học.
                <br />
                Chúng tôi không thuê hoặc sử dụng giảng viên cũng như
                chúng tôi không chịu trách nhiệm về bất kỳ vấn đề nào được
                giải quyết giữa giảng viên và người dùng. Chúng tôi không
                chịu trách nhiệm về các tranh chấp, khiếu nại, tổn thất,
                thương tích hoặc thiệt hại dưới bất kỳ hình thức nào có
                thể phát sinh hoặc liên quan đến hành vi của giảng viên
                hoặc người dùng.
                <br />
                Khi các bạn sử dụng Dịch vụ của chúng tôi, các bạn có thể
                tìm thấy các liên kết đến các trang web khác mà chúng tôi
                không sở hữu hoặc kiểm soát. Chúng tôi không chịu trách
                nhiệm về nội dung hoặc bất kỳ khía cạnh nào khác của các
                trang web bên thứ ba này, bao gồm cả việc thu thập thông
                tin của họ về các bạn. Các bạn cũng nên đọc các điều khoản
                và điều kiện và chính sách bảo mật của họ.
                <br />
                7. Quyền của Edunetwork
                <br />
                Tất cả quyền, quyền sở hữu và quyền lợi đối với nền tảng
                và Dịch vụ của Edunetwork, bao gồm trang web của chúng
                tôi, các ứng dụng hiện tại hoặc tương lai, API, cơ sở dữ
                liệu và nội dung mà nhân viên hoặc đối tác của chúng tôi
                gửi hoặc cung cấp thông qua dịch vụ của chúng tôi (ngoại
                trừ nội dung do giảng viên cung cấp) đang và sẽ là tài sản
                độc quyền của Edunetwork và bên cấp phép. Các nền tảng và
                dịch vụ của chúng tôi được bảo vệ bởi luật bản quyền,
                thương hiệu và các luật khác của cả Singapore và nước
                ngoài. Không có điều khoản nào cung cấp cho các bạn quyền
                sử dụng tên Edunetwork hoặc bất kỳ thương hiệu, logo, tên
                miền và các tính năng thương hiệu đặc biệt nào khác/ Bạn
                không có quyền sử dụng tên Edunetwork hoặc bất kỳ thương
                hiệu, logo, tên miền và các đặc điểm thương hiệu đặc biệt
                nào khác của Edunetwork. Bất kỳ phản hồi, nhận xét hoặc đề
                xuất các bạn có thể cung cấp về Edunetwork hoặc Dịch vụ là
                hoàn toàn tự nguyện và chúng tôi sẽ được tự do sử dụng các
                phản hồi, nhận xét hoặc đề xuất đó khi chúng tôi thấy phù
                hợp và không có bất kỳ nghĩa vụ nào đối với các bạn.
                <br />
                Các bạn không được thực hiện bất kỳ thao tác nào sau đây
                trong khi truy cập hoặc sử dụng nền tảng và Dịch vụ của
                Edunetwork:
                <br />
                • Truy cập, giả mạo hoặc sử dụng các khu vực không công
                khai trên Edunetwork, các hệ thống máy tính của
                Edunetwork, hoặc các hệ thống phân phối kỹ thuật của các
                nhà cung cấp dịch vụ của Edunetwork.
                <br />
                • Vô hiệu hóa, can thiệp hoặc cố gắng phá vỡ bất kỳ tính
                năng nào của các nền tảng liên quan đến bảo mật hoặc thăm
                dò, quét hoặc kiểm tra lỗ hổng của bất kỳ hệ thống của
                chúng tôi.
                <br />
                • Sao chép, sửa đổi, tạo tác phẩm phái sinh, đảo ngược kỹ
                thuật, đảo ngược lắp ráp hoặc cố gắng khám phá bất kỳ mã
                nguồn hoặc nội dung nào trên nền tảng hoặc Dịch vụ của
                Edunetwork.
                <br />
                • Truy cập hoặc tìm kiếm hoặc cố gắng truy cập hoặc tìm
                kiếm nền tảng của chúng tôi bằng bất kỳ phương tiện nào
                (tự động hoặc khác) ngoài các chức năng tìm kiếm hiện có
                của chúng tôi được cung cấp qua trang web, ứng dụng di
                động hoặc API của chúng tôi (và chỉ tuân theo các điều
                khoản và điều kiện API đó). Các bạn không được quét dữ
                liệu, cài phần mềm gián điệp, sử dụng robot hoặc bất kỳ
                phương tiện tự động nào khác khi truy cập Dịch vụ.
                <br />
                • Sử dụng Dịch vụ trong bất cứ hình thức nào để gửi thông
                tin nhận dạng nguồn thay đổi, lừa đảo hoặc giả mạo (chẳng
                hạn như gửi thông tin liên lạc sai lệch qua email dưới tên
                của Edunetwork); hoặc can thiệp, hoặc làm gián đoạn (hoặc
                cố gắng làm như vậy) quyền truy cập của bất kỳ người dùng,
                máy chủ hoặc mạng, bao gồm, nhưng không giới hạn, gửi
                vi-rút, gây quá tải, tấn công, spam hoặc bom thư các nền
                tảng hoặc dịch vụ, hoặc bằng bất kỳ cách nào khác can
                thiệp hoặc tạo gánh nặng không đáng có cho Dịch vụ.
                <br />
                8. Điều khoản pháp lý khác
                <br />
                8.1 Thỏa thuận ràng buộc
                <br />
                Người dùng đồng ý rằng qua việc đăng ký, truy cập hoặc sử
                dụng Dịch vụ của chúng tôi, các bạn đồng ý ký kết hợp đồng
                ràng buộc về mặt pháp lý với Edunetwork. Nếu các bạn không
                đồng ý với các Điều khoản này, các bạn đừng đăng ký, truy
                cập hoặc sử dụng bất kỳ Dịch vụ nào của chúng tôi.
                <br />
                Nếu các bạn là giảng viên chấp nhận các Điều khoản này và
                sử dụng Dịch vụ của chúng tôi thay mặt công ty, tổ chức,
                chính phủ hoặc pháp nhân khác, các bạn tuyên bố và bảo đảm
                rằng các bạn được quyền làm như vậy.
                <br />
                Bất kỳ phiên bản nào của các Điều khoản này bằng ngôn ngữ
                khác với tiếng Anh đều được cung cấp để thuận tiện và các
                bạn hiểu và đồng ý rằng ngôn ngữ tiếng Anh sẽ kiểm soát
                nếu có bất kỳ tranh chấp nào.
                <br />
                Các Điều khoản này (bao gồm mọi thỏa thuận và chính sách
                được liên kết từ các Điều khoản này) tạo thành toàn bộ
                thỏa thuận giữa các bạn và chúng tôi (bao gồm Thỏa thuận
                giảng viên, nếu các bạn là giảng viên).
                <br />
                Nếu bất kỳ phần nào trong các Điều khoản này bị coi là
                không hợp lệ hoặc không thể thực thi được theo luật hiện
                hành, thì điều khoản đó sẽ được coi là thay thế bằng một
                điều khoản hợp lệ, có thể thi hành phù hợp nhất với mục
                đích của điều khoản ban đầu và các Điều khoản còn lại sẽ
                tiếp tục có hiệu lực.
                <br />
                Ngay cả khi chúng tôi bị chậm trễ trong việc thực thi các
                quyền của mình hoặc không thực hiện quyền trong mọi trường
                hợp, điều đó không có nghĩa là chúng tôi từ bỏ các quyền
                của mình theo các Điều khoản này và chúng tôi có thể quyết
                định thực thi chúng trong tương lai. Nếu chúng tôi quyết
                định từ bỏ bất kỳ quyền nào của chúng tôi trong trường hợp
                cụ thể, điều đó không có nghĩa là chúng tôi từ bỏ các
                quyền của chúng tôi nói chung hoặc trong tương lai.
                <br />
                Các phần sau sẽ tồn tại khi hết hạn hoặc chấm dứt các Điều
                khoản này: Phần 2 (Đăng ký khóa học và truy cập trọn đời),
                6 (Rủi ro khi sử dụng Edunetwork), 7 (Quyền của
                Edunetwork), 8 (Điều khoản pháp lý khác).
                <br />
                8.2 Miễn trừ trách nhiệm
                <br />
                Điều có thể xảy ra là nền tảng của chúng tôi ngừng hoạt
                động, hoặc để bảo trì theo kế hoạch hoặc do vấn đề nào đó
                làm chậm trang web. Điều có thể xảy ra là một trong những
                giảng viên của chúng tôi đang cung cấp những tuyên bố sai
                lệch trong khóa học của họ. Cũng có thể xảy ra là chúng
                tôi gặp phải vấn đề bảo mật. Đây chỉ là những ví dụ. Các
                bạn chấp nhận rằng các bạn sẽ không có bất kỳ khiếu nại
                nào đối với chúng tôi trong bất kỳ trường hợp nào trong số
                những trường hợp này khi mọi việc diễn ra đúng. Về pháp
                lý, đầy đủ ngôn ngữ hơn, các Dịch vụ và nội dung được cung
                cấp trên cơ sở “nguyên trạng” và “có sẵn”. Chúng tôi (và
                các chi nhánh, nhà cung cấp, đối tác và đại lý của chúng
                tôi) không tuyên bố hay bảo đảm về tính phù hợp, độ tin
                cậy, tính sẵn có, tính kịp thời, bảo mật, không có lỗi
                hoặc tính chính xác của Dịch vụ hoặc nội dung của chúng và
                từ chối bất kỳ sự bảo đảm hoặc điều kiện nào (thể hiện
                hoặc ngụ ý), bao gồm các bảo đảm ngụ ý về tính thương mại,
                tính phù hợp cho một mục đích cụ thể, quyền sở hữu và
                không vi phạm. Chúng tôi (và các chi nhánh, nhà cung cấp,
                đối tác và đại lý của chúng tôi) không đảm bảo rằng các
                bạn sẽ có được kết quả cụ thể từ việc sử dụng Dịch vụ.
                Việc các bạn sử dụng Dịch vụ (bao gồm mọi nội dung) hoàn
                toàn do các bạn chịu rủi ro. Một số khu vực pháp lý không
                cho phép loại trừ các bảo đảm ngụ ý, vì vậy một số loại
                trừ ở trên có thể không áp dụng cho các bạn.
                <br />
                Chúng tôi có thể quyết định ngừng cung cấp các tính năng
                nhất định của Dịch vụ bất cứ lúc nào và vì bất kỳ lý do
                gì. Trong mọi trường hợp, Edunetwork hoặc các chi nhánh,
                nhà cung cấp, đối tác hoặc đại lý sẽ không chịu trách
                nhiệm về bất kỳ thiệt hại nào do việc gián đoạn hoặc thiếu
                khả dụng của các tính năng đó.
                <br />
                Chúng tôi không chịu trách nhiệm về việc chậm trễ hoặc
                không thực hiện bất kỳ Dịch vụ nào do các sự kiện nằm
                ngoài tầm kiểm soát hợp lý của chúng tôi, như chiến tranh,
                thù địch hoặc phá hoại; Thiên tai; mất điện, internet hoặc
                viễn thông; hoặc hạn chế của chính phủ.
                <br />
                8.3 Giới hạn trách nhiệm
                <br />
                Có những rủi ro khi sử dụng Dịch vụ của chúng tôi, ví dụ:
                nếu các bạn đăng ký khóa học về sức khỏe và chăm sóc sức
                khỏe, và các bạn tự làm mình bị thương. Các bạn hoàn toàn
                chấp nhận những rủi ro này và các bạn đồng ý rằng các bạn
                sẽ không khiếu nại về các thiệt hại ngay cả khi các bạn bị
                tổn thất hoặc thiệt hại khi sử dụng nền tảng và Dịch vụ
                của chúng tôi. Về mặt pháp lý, đầy đủ ngôn ngữ hơn, trong
                phạm vi được pháp luật cho phép, chúng tôi (và các công
                ty, nhà cung cấp, đối tác và đại lý của chúng tôi) sẽ
                không chịu trách nhiệm về bất kỳ thiệt hại gián tiếp, ngẫu
                nhiên, trừng phạt hoặc hậu quả nào (bao gồm mất dữ liệu,
                doanh thu, lợi nhuận, hoặc cơ hội kinh doanh, hoặc thương
                tích cá nhân hoặc tử vong), cho dù phát sinh trong hợp
                đồng, bảo hành, trách nhiệm dân sự, trách nhiệm sản phẩm,
                hoặc ngay cả khi chúng tôi đã được thông báo trước về khả
                năng thiệt hại. Trách nhiệm của chúng tôi (và trách nhiệm
                của từng công ty nhóm, nhà cung cấp, đối tác và đại lý của
                chúng tôi) đối với các bạn hoặc bất kỳ bên thứ ba trong
                mọi trường hợp được giới hạn ở mức trên một trăm đô la
                (100 đô la). Một số khu vực pháp lý không cho phép loại
                trừ hoặc giới hạn trách nhiệm đối với các thiệt hại do hậu
                quả hoặc ngẫu nhiên, vì vậy một số điều trên có thể không
                áp dụng cho các bạn.
                <br />
                8.4 Bồi thường
                <br />
                Nếu các bạn cư xử theo cách khiến chúng tôi gặp rắc rối về
                pháp lý, chúng tôi có thể kiện các bạn. Các bạn đồng ý bồi
                thường, bảo vệ (nếu chúng tôi yêu cầu) và tránh cho
                Edunetwork, các công ty nhóm của chúng tôi và các viên
                chức, giám đốc, nhà cung cấp, đối tác và đại lý của họ
                khỏi mọi khiếu nại, yêu cầu, tổn thất, thiệt hại, hoặc chi
                phí (bao gồm phí luật sư hợp lý) phát sinh từ (a) nội dung
                các bạn sở hữu, (b) việc các bạn sử dụng Dịch vụ (c) các
                bạn vi phạm Điều khoản này hoặc (d) các bạn vi phạm bất kỳ
                quyền của bên thứ ba. Nghĩa vụ bồi thường của các bạn sẽ
                tồn tại sau khi chấm dứt Điều khoản này và việc các bạn sử
                dụng Dịch vụ.
                <br />
                8.5 Luật điều chỉnh và quyền tài phán
                <br />
                Điều khoản này được điều chỉnh theo luật pháp Singapore mà
                không liên quan đến lựa chọn hoặc tranh chấp các nguyên
                tắc luật pháp. Trường hợp không áp dụng Điều khoản “Giải
                quyết tranh chấp” dưới đây, các bạn và chúng tôi đồng ý
                với quyền tài phán và địa điểm độc quyền của Tòa án
                Singapore.
                <br />
                8.6 Các hành động và thông báo pháp lý
                <br />
                Không có vụ kiện nào, bất kể dưới hình thức nào, phát sinh
                hoặc liên quan đến Thỏa thuận này có thể được một bên khởi
                kiện sau một (1) năm kể từ khi nguyên nhân vụ kiện phát
                sinh.
                <br />
                Bất kỳ thông báo hoặc thông tin liên lạc nào khác được
                cung cấp dưới đây sẽ được lập thành văn bản và gửi qua thư
                bảo đảm có yêu cầu báo nhận hoặc gửi qua email (do chúng
                tôi gửi đến email liên kết với tài khoản của các bạn hoặc
                do các bạn gửi đến notices@Edunetwork.pro).
                <br />
                8.7 Mối quan hệ giữa chúng ta
                <br />
                Các bạn và chúng tôi đồng ý rằng không có mối quan hệ liên
                doanh, hợp tác, tuyển dụng, nhà thầu hoặc đại lý nào tồn
                tại giữa chúng ta.
                <br />
                8.8 Không chuyển nhượng
                <br />
                Các bạn không được chuyển nhượng hoặc chuyển giao các Điều
                khoản này (hoặc các quyền và giấy phép được cấp kèm theo).
                Ví dụ: nếu các bạn đã đăng ký tài khoản với tư cách nhân
                viên công ty, tài khoản của các bạn không thể được chuyển
                sang một nhân viên khác. Chúng tôi có thể chuyển nhượng
                các Điều khoản này (hoặc các quyền và giấy phép được cấp
                kèm theo) cho một công ty hoặc bên khác không hạn chế.
                Không có gì trong Điều khoản này quy định bất kỳ quyền,
                lợi ích hoặc biện pháp khắc phục đối với bất kỳ cá nhân
                hoặc tổ chức bên thứ ba. Các bạn đồng ý rằng tài khoản của
                các bạn không được chuyển nhượng và tất cả các quyền đối
                với tài khoản của các bạn và các quyền khác theo Điều
                khoản này sẽ chấm dứt khi các bạn qua đời.
                <br />
                9. Cập nhật các điều khoản này
                <br />
                Tùy từng thời điểm, chúng tôi có thể cập nhật các Điều
                khoản này để làm rõ các yêu cầu của chúng tôi hoặc để phản
                ánh các yêu cầu mới hoặc khác (chẳng hạn như chúng tôi
                thêm các tính năng mới) và Edunetwork có toàn quyền quyết
                định sửa đổi và / hoặc thay đổi Điều khoản này bất cứ lúc
                nào. Nếu chúng tôi thực hiện bất kỳ thay đổi quan trọng
                nào, chúng tôi sẽ thông báo cho các bạn bằng các phương
                tiện nổi bật như thông báo qua email được gửi đến địa chỉ
                email được chỉ định trong tài khoản của các bạn hoặc bằng
                cách đăng thông báo qua Dịch vụ của chúng tôi. Việc sửa
                đổi sẽ có hiệu lực vào ngày đăng trừ khi có quy định khác.
                <br />
                Việc các bạn tiếp tục sử dụng Dịch vụ của chúng tôi sau
                khi các thay đổi có hiệu lực có nghĩa là các bạn chấp nhận
                những thay đổi đó. Mọi điều khoản được sửa đổi sẽ thay thế
                tất cả Điều khoản trước đó.
                <br />
                10. Cách liên hệ với chúng tôi
                <br />
                Cách tốt nhất để liên hệ với chúng tôi là liên hệ với
                Trung tâm hỗ trợ của chúng tôi tại info@edunetwork.global.
                Chúng tôi rất muốn nghe những câu hỏi, mối quan tâm và
                phản hồi của các bạn về Dịch vụ của chúng tôi.
              </React.Fragment>
            )}
          </p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({}, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(TermOfService);
