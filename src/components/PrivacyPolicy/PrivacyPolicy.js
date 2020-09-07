import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './PrivacyPolicy.scss';
import { sendContactAction } from '../../actions/contact';
import { keys } from '../../constants';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import { getTranslatedText } from '../../services/appService';
import { CURRENT_LANG_KEY } from '../../actions';

class PrivacyPolicy extends Component {
  render() {
    let currentLang = localStorage.getItem(CURRENT_LANG_KEY) || 'en';
    return (
      <div>
        <div className="ContactPage">
          <p>
            {(currentLang === "en")? (
              <React.Fragment>
                Affiliate Terms & Conditions
                <br />
                THIS IS A LEGAL AGREEMENT BETWEEN YOU (“YOU”, “YOUR”, OR
                “YOURS”), AND EDUNETWORK, INC., A SINGAPOREAN COMPANY
                LOCATED IN SINGAPORE (“EDUNETWORK”, “WE”, “US”, OR “OUR”).
                BY CLICKING ON THE "I ACCEPT" BUTTON AT THE END OF THESE
                AFFILIATE TERMS AND CONDITIONS (“AFFILIATE TERMS”) YOU ARE
                AGREEING THAT YOU HAVE READ AND UNDERSTAND THESE AFFILIATE
                TERMS AND THAT YOU AGREE TO BE LEGALLY RESPONSIBLE FOR
                EACH AND EVERY TERM AND CONDITION HEREIN.
                <br />
                Any version of these Affiliate Terms in a language other
                than English is provided for convenience and You
                understand and agree that the English language will
                control if there is any conflict.
                <br />
                All capitalized terms used and not otherwise defined
                herein shall have the meaning ascribed to them in
                Edunetwork’s Terms of Use or Pricing and Promotions
                Policy.
                <br />
                1. Overview
                <br />
                These Affiliate Terms contain the complete terms and
                conditions that apply to You when becoming an affiliate in
                Edunetwork’s affiliate program (the “Affiliate Program”).
                The purpose of these Affiliate Terms is to allow You to
                make affiliate commissions through sales generated from
                Your website / by You to Our Services in the manner set
                forth herein.
                <br />
                2. Enrollment in the Affiliate Program
                <br />
                (a) Application Completion. If You have not already done
                so, You need to complete an application to the Affiliate
                Program (the “Application”). You need to identify Your
                website (if applicable), describe how You plan to promote
                Edunetwork’s Services, and provide certain contact
                information. The Application can be found at Our Website
                https://edunetwork.global.
                <br />
                (b) Acceptance of Your Application. If we choose to accept
                Your Application, You will receive an email notification
                confirming that Your Application has been approved. You
                understand and agree that We may accept or reject Your
                Application at Our sole discretion. Your Application will
                be rejected if any of the information You provide is
                incorrect or incomplete, or for any other reason We may
                deem fit to reject Your Application.
                <br />
                (c) Access to our Affiliate Program. If We have accepted
                Your Application, We will send You a welcome email so that
                you can start promoting Our Services and entering Our
                affiliate center. From this center You will be able to
                download Promotional Materials and get Your referral link
                as well as access Your reports which will describe Our
                calculation of sales and affiliate commissions due to You.
                For purposes of clarity, Promotional Materials is defined
                as banners, text links, article copy, and access to data
                feeds.
                <br />
                (d) You will ensure that your information including your
                email address is at all times complete, accurate and
                up-to-date. We may send communications to the email
                address associated with your account. You will be deemed
                to have received all notifications, approvals, and other
                communications sent to that email address, even if the
                email address associated with your account is no longer
                current.
                <br />
                3. Specific Obligations of Affiliates
                <br />
                As a member of Our Affiliate Program, You represent,
                warrant, and covenant that You will:
                <br />
                (a) Link to Our Services. You will implement the links,
                banners, and other means of linking Your website to Our
                Services (collectively, “Referral Links”). You will be
                able to download certain technical materials, including
                links, HTML code, banner ads, copy and other content, and
                any documentation for the foregoing (collectively,
                “Referral Materials”). When Our customers purchase a
                course on the Edunetwork website through the Referral
                Links, you can receive commissions for qualifying
                purchases as described in Affiliate Commissions.
                <br />
                (b) Maintain Your Site: The maintenance and the updating
                of Your website will be Your responsibility. Edunetwork
                will notify you via email of any changes to these Terms
                and our Referral Materials. However, as a member of Our
                Affiliate Program and because Our information is updated
                often, it will be necessary for You to update the Referral
                Materials on Your website to maintain consistency and
                accuracy.
                <br />
                (c) Follow and Comply with All Copyright Laws: It is
                entirely Your responsibility to follow and comply with all
                applicable copyright and other laws that pertain to Your
                website. We will not be responsible if You use another
                person's copyrighted material in violation of the law.
                <br />
                (d) Not to solicit Our Instructors: As a member of Our
                Affiliate Program, You agree not to directly or
                indirectly, for Yourself or on behalf of another, solicit
                business away from, or solicit, induce, influence, or
                encourage any of Our Instructors to upload their
                Edunetwork Course(s) on Your websites and/or platforms, or
                otherwise alter, terminate or breach their contractual or
                other business relationship with Us.
                <br />
                4. Affiliate Responsibilities
                <br />
                As a member of Our Affiliate Program, You understand and
                agree that:
                <br />
                (a) We Can Monitor Your Site: You hereby give Us the right
                to monitor Your website at any time to determine if You
                are following these Affiliate Terms, and to notify You of
                any changes We feel You should make to remain in
                compliance. Further, You must comply with any requests we
                make for you to take down specific content from your
                website. Failure to comply is a violation of these Terms
                and grounds for termination of Your affiliate status.
                <br />
                (b) We Determine the Policies for Referred Customers:
                Persons who become customers of Our Services through
                referrals made in the Affiliate Program will be considered
                Our customers, at Our sole discretion. All Our terms,
                rules, policies, and operating procedures that apply to
                Our Users will apply to such referred customers. We may
                change Our terms, rules, policies, and operating
                procedures at any time, as further described in Our Terms
                of Use and Our other terms as We may post from time to
                time
                <br />
                (c) You will not promote Edunetwork through paid
                advertising or media buying that leads directly to the
                Edunetwork website (found at Edunetwork.pro). You will not
                bid on Edunetwork-branded keywords as an affiliate. This
                applies to all advertising platforms and to all affiliates
                unless direct approval from Edunetwork is granted.
                <br />
                (d) You will not use Our company name or variations of Our
                company name in your Domain Names or Social Media pages:
                You may not register or purchase domain names that include
                Our company’s name or any misspellings or variations of
                Our company name to run promotions as an affiliate.
                Additionally, you may not include Our Company name,
                variations of Our company name, or the look and feel of
                Our own social media pages on any social media pages (i.e.
                Facebook Fan Page) where You run promotions as an
                affiliate.
                <br />
                (e) You will be Responsible for Your Website’s Content:
                You may not promote Our content and Our Instructors’
                courses on a website that contains any form of misleading,
                defamatory, obscene, illegal, bigoted, pornographic or any
                other content deemed offensive by Us.
                <br />
                (f) You will not promote using cookie-stuffing: You may
                not use cookie stuffing techniques or click-generators
                that set the tracking cookie without the user actually
                clicking on the Referral Link. You will not artificially
                generate clicks or impressions on your site or create
                visits on the Edunetwork site, whether by way of a robot
                or software program or otherwise.
                <br />
                (g) You will not mimic Our media and content: Affiliate
                must make sure that his or her media does not copy or
                resemble the look and feel of the Edunetwork website or
                create the impression that Your media is part of Our
                company's website. You also understand that using the
                language found on Our pages verbatim is not allowed unless
                it is to describe the content found on any given course
                landing page.
                <br />
                (h) You will be Responsible for Your use of content found
                on Our site. You may create Your own promotional materials
                using pages from our site as reference. You may also use
                course images and part of the text in Our pages to promote
                the products accurately on Your site. However, You may NOT
                download, copy, or use video content (free or paid),
                course supplementary materials (PDFs, quizzes or extra
                material), or lesson descriptions and upload them on Your
                own site(s). Violation of this provision may result in the
                immediate termination of Your affiliate account.
                <br />
                (i) You will not use spyware, malware, virus and the like:
                You may not include on your site, display, or otherwise
                use Referral Links or other Content that uses any spyware,
                malware, or virus, or any software application not
                expressly and knowingly authorized by users prior to being
                downloaded or installed on their computer or other
                electronic device.
                <br />
                (j) You will be open and honest about Your relationship to
                Us: You may not misrepresent or embellish the relationship
                between you and Edunetwork or imply any relationship or
                affiliation between you and Edunetwork or any other person
                or entity except as expressly permitted by this affiliate
                Agreement. You may not represent yourself as an agent or
                employee of Edunetwork or represent that you have the
                authority to bind Edunetwork to a contract.
                <br />
                (k) You cannot utilize a browser extension to promote
                Edunetwork or Edunetwork courses without direct approval
                from Edunetwork. All coupon codes available in the
                extension must be approved by Edunetwork. You also
                understand and agree that your browser extension cannot
                allow users to upload new coupons into the extension's
                feed.
                <br />
                (l) You will be mindful of who You do business with: You
                may not use marketing practices that attract fake
                customers. For example, you may not convince someone to
                purchase a course solely to make him or her become Your
                sub-affiliate. We, in our sole discretion, will make the
                determination whether someone is a fake customer.
                <br />
                (m) You will ensure your sub-affiliates follow all of Our
                terms: You have the right to work with a sub-affiliate
                network so long as your sub-affiliates follow Our
                Affiliate Terms. You understand that You are responsible
                for Your sub-affiliate’s compliance with these terms and
                that non-compliance by any of Your sub-affiliates may
                result in the termination of Your affiliate account.
                <br />
                (n) For Edunetwork employees who are also Edunetwork
                Affiliates: You will make it clear you are a Edunetwork
                employee when promoting Edunetwork as an affiliate. As a
                Edunetwork employee, You agree to clearly state in all
                promotional posts or promotions containing Edunetwork
                affiliate links Your employee and affiliate relationship
                with Edunetwork via a disclaimer. Specific requirements
                and examples for Edunetwork Affiliates who are also
                Edunetwork employees, can be found here.
                <br />
                These Affiliate Terms will begin and become effective upon
                Our acceptance of Your Application.
                <br />
                5. Affiliate Commissions
                <br />
                (a) Eligibility: Except in jurisdictions in which such a
                transaction is not permitted, You are eligible to earn
                affiliate commissions through Referrals (as defined in
                section (i) below) during the term of these Affiliate
                Terms, according to the calculation described below.
                <br />
                (b) Amount due: The exact amount of affiliate commissions
                due to You will be calculated in the following manner:
                <br />
                The affiliate commission is set up in the offers available
                to You in Your Affiliate account. A “Referral” is a paying
                customer that You refer to Our website using the Referral
                Materials. Acceptance of a Referral as a User of Our
                Services shall be at Our sole discretion.
                <br />
                (c) Payment of affiliate commissions will be made upon
                Your requests. Payments are made according to the payment
                method You have selected in Your affiliate account. If
                Your account is terminated due to violation of these
                Affiliate Terms, We reserve the right to withhold all
                future payments owed to You.
                <br />
                (d) Affiliate payments are sent to you using Our partner’s
                payment system. Edunetwork does not send payment directly
                to any affiliates. Affiliates are responsible for making
                sure they are able to accept payments from Edunetwork's
                affiliate network.
                <br />
                (e) Affiliates are responsible for any and all charges,
                fees, taxes, exchange rates, surcharges and other expenses
                incurred in order to receive affiliate payments. Please
                check with your receiving banking institution to find out
                if any of these apply to Your account.
                <br />
                (f) If We determine that payment of affiliate commissions
                to You in any jurisdiction is illegal under any laws, then
                We may reserve the right to not pay affiliate commissions
                for any sales made in that jurisdiction.
                <br />
                (g) We may withhold Your final payment for a reasonable
                time to ensure that the correct amount is paid to You.
                <br />
                (h) If at any time there has been no substantial activity
                on your account for 01 year, then we will have the right
                to withhold any accrued fees. Further, any unpaid fees in
                your account may be subject to escheatment under
                applicable law.
                <br />
                6. Licenses
                <br />
                (a) You hereby grant Us a non-exclusive, non-transferable,
                revocable right to use Your names, titles, and logos in
                the advertising, marketing, promoting, and publicizing in
                any manner of Our rights under these Affiliate Terms.
                However, We are under no obligation to advertise, market,
                promote, or publicize.
                <br />
                (b) We both agree not to use the other's proprietary
                materials in any manner that is disparaging or that
                otherwise portrays the other in a negative light. We each
                reserve all of our respective rights in the proprietary
                materials covered by this license. Either one of us may
                revoke this license at any time by giving the other
                written notice ending our engagement under these Affiliate
                Terms and Your Affiliate status. Other than the license
                granted in these Affiliate Terms, we each retain all
                right, title, and interest to our respective rights and no
                right, title, or interest is transferred to the other.
                <br />
                7. Disclaimer
                <br />
                WE MAKE NO EXPRESS OR IMPLIED REPRESENTATIONS OR
                WARRANTIES REGARDING EDUNETWORK. ANY IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                ACCURACY, RELIABILITY AND NON-INFRINGEMENT ARE EXPRESSLY
                DISCLAIMED AND EXCLUDED. IN ADDITION, WE MAKE NO
                REPRESENTATION THAT THE OPERATION OF OUR WEBSITE WILL BE
                UNINTERRUPTED OR ERROR FREE, AND WE WILL NOT BE LIABLE FOR
                THE CONSEQUENCES OF ANY INTERRUPTIONS OR ERRORS.
                <br />
                8. Limitations of Liability
                <br />
                WE WILL NOT BE LIABLE TO YOU WITH RESPECT TO ANY SUBJECT
                MATTER OF THESE AFFILIATE TERMS UNDER ANY CONTRACT,
                NEGLIGENCE, TORT, STRICT LIABILITY, OR OTHER LEGAL OR
                EQUITABLE THEORY FOR ANY INDIRECT, INCIDENTAL,
                CONSEQUENTIAL, SPECIAL, OR EXEMPLARY DAMAGES (INCLUDING,
                WITHOUT LIMITATION, LOSS OF REVENUE OR GOODWILL OR
                ANTICIPATED PROFITS OR LOST BUSINESS), EVEN IF YOU HAVE
                BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. FURTHER,
                NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED IN
                THESE AFFILIATE TERMS, IN NO EVENT SHALL OUR CUMULATIVE
                LIABILITY TO YOU ARISING OUT OF OR RELATED TO THESE
                AFFILIATE TERMS, WHETHER BASED IN CONTRACT, NEGLIGENCE,
                STRICT LIABILITY, TORT, OR OTHER LEGAL OR EQUITABLE
                THEORY, EXCEED THE TOTAL REFERRAL FEES PAID TO YOU UNDER
                THESE AFFILIATE TERMS.
                <br />
                9. Indemnification
                <br />
                You agree to indemnify and hold harmless Edunetwork and
                its employees, representatives, agents, and affiliates,
                against any and all claims, suits, actions, or other
                proceedings brought against them based on or arising from
                any claim resulting from Your breach of these Affiliate
                Terms. You will pay any and all costs, damages, and
                expenses, including, but not limited to, reasonable
                attorneys' fees and costs awarded against or otherwise
                incurred by Us in connection with or arising from any such
                claim, suit, action, or proceeding.
                <br />
                10. Termination
                <br />
                Edunetwork or You can Each End Our Engagement Under these
                Affiliate Terms: Either Us or You may end these Affiliate
                Terms AT ANY TIME, with or without cause, by giving the
                other party written notice. Written notice can be in the
                form of mail, email or fax.
                <br />
                11. Modification
                <br />
                From time to time, We may update these Terms to clarify
                Our practices or to reflect new or different practices,
                for example We may change the scope of Referral Fees,
                payment procedures, and Affiliate Program rules, or
                Referral Specifications or Referral Materials, and
                Edunetwork reserves the right in its sole discretion to
                modify and/or make changes to these Affiliate Terms at any
                time, at Our sole discretion. If We make any material
                change to these Affiliate Terms, You will automatically
                receive an email notifying You that changes were made and
                prompting You to agree to Our new Affiliate Terms.
                Modifications will become effective on the day they are
                posted unless stated otherwise. If any modification is
                unacceptable to You, Your only option is to end Your
                participation in the Affiliates Program. Your continued
                access to Our Linkshare platform will be contingent on
                Your acceptance of Our updated Affiliate Terms. You should
                visit the Services regularly to ensure You are aware of
                any changes to the Affiliate Terms, as any revised
                Affiliate Terms shall supersede all previous Affiliate
                Terms.
                <br />
                12. Miscellaneous
                <br />
                (a) You represent and warrant to Us that:
                <br />
                (i) These Affiliate Terms constitutes Your legal, valid,
                and binding obligation, enforceable against You in
                accordance with the terms and conditions set-forth herein;
                <br />
                (ii) You have the full right, power, and authority to
                accept and be bound by these Affiliate Terms and to
                perform Your obligations under these Affiliate Terms,
                without the approval or consent of any other party;
                <br />
                (iii) You have sufficient right, title, and interest in
                and to the rights granted to Us in these Affiliate Terms;
                and,
                <br />
                (iv) YOU HAVE READ AND TAKEN INTO ACCOUNT THE LIMITATION
                OF LIABILITY AND WARRANTY DISCLAIMER PROVISIONS OF THESE
                AFFILIATE TERMS PRIOR TO ACCEPTING THESE AFFILIATE TERMS.
                <br />
                (b) Independent Contractors. Each of us shall be deemed to
                be independent contractors with respect to the subject
                matter of these Affiliate Terms, and nothing contained in
                these Affiliate Terms shall be deemed or construed in any
                manner as creating any partnership, joint venture,
                employment, agency, fiduciary, or other similar
                relationship. You will not make any statement, whether on
                your site or otherwise, that contradicts or may contract
                anything in this paragraph.
                <br />
                (c) Assignability. You may not assign Your rights or
                obligations under these Affiliate Terms to any party, and
                any attempt to do so will be void and without effect. We
                are free to assign these Affiliate Terms.
                <br />
                (d) Governing Laws. These Affiliate Terms shall be
                governed by the substantive laws of Singapore without
                reference to its choice or conflicts of law principles
                that would require the application of the laws of another
                jurisdiction, and shall be considered to have been made
                and accepted in Singapore. Any dispute that may arise in
                connection with these Affiliate Terms shall be resolved in
                accordance with our Terms of Use.
                <br />
                (e) You may not amend or waive any provision of these
                Affiliate Terms unless in writing and signed by both of
                us.
                <br />
                (f) Entire Agreement. These Affiliate Terms represent the
                entire agreement between Us and You, and shall supersede
                all prior agreements and communications between us, oral
                or written.
                <br />
                (g) Headings and Titles. The headings and titles contained
                in these Affiliate Terms are included for convenience
                only, and shall not limit or otherwise affect the terms
                herein.
                <br />
                (h) Severability. If any provision of these Affiliate
                Terms is held to be invalid or unenforceable, that
                provision shall be eliminated or limited to the minimum
                extent necessary such that the intent of the both of us is
                effectuated, and the remainder of these Affiliate Terms
                shall have full force and effect.
              </React.Fragment>
            ) : (
              <React.Fragment>
                <br />
                Điều khoản và điều kiện liên kết
                <br />
                ĐÂY LÀ MỘT THỎA THUẬN PHÁP LÝ GIỮA CÁC BẠN (“BẠN”, “CỦA
                BẠN”, HOẶC “CỦA CÁC BẠN”), VÀ EDUNETWORK, INC., LÀ CÔNG TY
                SINGAPORE CÓ TRỤ SỞ TẠI SINGAPORE (“EDUNETWORK”, “CHÚNG
                TÔI”, HOẶC “CỦA CHÚNG TÔI”). BẰNG CÁCH NHẤP VÀO NÚT "TÔI
                CHẤP NHẬN" Ở CUỐI CÁC ĐIỀU KHOẢN VÀ ĐIỀU KIỆN LIÊN KẾT NÀY
                (ĐIỀU KHOẢN LIÊN KẾT), CÁC BẠN ĐỒNG Ý RẰNG CÁC BẠN ĐÃ ĐỌC
                VÀ HIỂU CÁC ĐIỀU KHOẢN TRONG LIÊN KẾT NÀY VÀ CÁC BẠN ĐỒNG
                Ý CHỊU TRÁCH NHIỆM PHÁP LÝ CHO MỖI ĐIỀU KHOẢN VÀ ĐIỀU KIỆN
                Ở Đ Y.
                <br />
                Bất kỳ phiên bản của các Điều khoản liên kết này bằng ngôn
                ngữ khác với tiếng Anh đều được cung cấp để thuận tiện cho
                giao dịch và các bạn hiểu và đồng ý rằng ngôn ngữ tiếng
                Anh sẽ kiểm soát nếu có bất kỳ tranh chấp nào.
                <br />
                Tất cả các thuật ngữ viết hoa được sử dụng và không được
                định nghĩa ở đây sẽ có nghĩa như được quy định trong Điều
                khoản sử dụng hoặc Chính sách khuyến mại và giá của
                Edunetwork cung cấp.
                <br />
                1. Tổng quan
                <br />
                Các Điều khoản liên kết này bao gồm các điều khoản và điều
                kiện đầy đủ áp dụng cho các bạn khi trở thành thành viên
                trong chương trình liên kết của Edunetwork (Chương trình
                liên kết). Mục đích của các Điều khoản liên kết này là cho
                phép các bạn thực hiện nhiệm vụ liên kết thông qua bán
                hàng được tạo từ trang web của các bạn / bởi các bạn cho
                Dịch vụ của chúng tôi theo cách được quy định trong điều
                khoản này.
                <br />
                2. Ghi danh vào chương trình liên kết
                <br />
                (a) Điền đơn đăng ký. Nếu các bạn chưa thực hiện thì các
                bạn cần phải điền đơn đăng ký cho Chương trình liên kết
                (Đơn đăng ký). Các bạn cần cung cấp trang web của các bạn
                (nếu có), mô tả cách các bạn dự định quảng bá Dịch vụ của
                Edunetwork, và cung cấp thông tin liên hệ nhất định. Đơn
                đăng ký có thể tìm thấy tại trang web của chúng tôi
                https://edunetwork.global.
                <br />
                (b) Chấp nhận đơn đăng ký của các bạn. Nếu chúng tôi chọn
                chấp nhận Đơn đăng ký của các bạn, các bạn sẽ nhận được
                thông báo qua email xác nhận rằng Đơn đăng ký của các bạn
                đã được phê duyệt. Các bạn hiểu và đồng ý rằng chúng tôi
                có thể chấp nhận hoặc từ chối Đơn đăng ký của các bạn theo
                quyết định riêng của chúng tôi. Đơn đăng ký của các bạn sẽ
                bị từ chối nếu có bất kỳ thông tin nào các bạn cung cấp
                không chính xác hoặc không đầy đủ hoặc vì bất kỳ lý do nào
                khác mà chúng tôi có thể cho là thích hợp để từ chối Đơn
                đăng ký của các bạn.
                <br />
                (c) Truy cập vào Chương trình liên kết của chúng tôi. Nếu
                chúng tôi đã chấp nhận Đơn đăng ký của các bạn, chúng tôi
                sẽ gửi cho các bạn một email chào mừng để các bạn có thể
                bắt đầu quảng bá Dịch vụ của chúng tôi và đăng nhập vào
                trung tâm liên kết của chúng tôi. Từ trung tâm này, các
                bạn sẽ có thể tải xuống các Tài liệu quảng cáo và nhận
                liên kết giới thiệu của các bạn cũng như truy cập các báo
                cáo của các bạn trong đó mô tả tính toán của chúng tôi về
                doanh số bán hàng và hoa hồng liên kết phải trả cho các
                bạn. Đối với mục đích rõ ràng, Tài liệu quảng cáo được xác
                định là biểu ngữ, liên kết văn bản, bản sao, và quyền truy
                cập vào nguồn cấp dữ liệu.
                <br />
                (d) Các bạn đảm bảo rằng thông tin của các bạn bao gồm địa
                chỉ email của các bạn luôn luôn đầy đủ, chính xác và cập
                nhật. Chúng tôi có thể gửi thông tin liên lạc đến địa chỉ
                email được liên kết với tài khoản của các bạn. Các bạn sẽ
                được coi là đã nhận được tất cả các thông báo, phê duyệt
                và các thông tin liên lạc khác được gửi đến địa chỉ email
                đó, ngay cả khi địa chỉ email được liên kết với tài khoản
                của các bạn không còn.
                <br />
                3. Nghĩa vụ cụ thể của các thành viên
                <br />
                Với tư cách thành viên của Chương trình liên kết của, các
                bạn tuyên bố, bảo đảm và giao ước rằng các bạn sẽ:
                <br />
                (a) Liên kết đến Dịch vụ của Edunetwork. Các bạn sẽ triển
                khai các liên kết, biểu ngữ và các phương tiện khác để
                liên kết trang web của các bạn với Dịch vụ của chúng tôi
                (gọi chung là “Liên kết giới thiệu”). Các bạn có thể tải
                xuống một số tài liệu kỹ thuật, bao gồm liên kết, mã HTML,
                quảng cáo biểu ngữ, bản sao và nội dung khác và bất kỳ tài
                liệu nào đã nói ở trên (gọi chung là “Tài liệu giới
                thiệu”). Khi khách hàng của chúng tôi mua một khóa học
                trên trang web của Edunetwork thông qua Liên kết giới
                thiệu, các bạn có thể nhận được hoa hồng cho các giao dịch
                mua đủ điều kiện như được mô tả trong Hoa hồng liên kết.
                <br />
                (b) Duy trì trang web của các bạn: Việc duy trì và cập
                nhật trang web của các bạn sẽ thuộc trách nhiệm của các
                bạn. Edunetwork sẽ thông báo cho các bạn qua email về bất
                kỳ thay đổi nào đối với các Điều khoản này và Tài liệu
                giới thiệu của chúng tôi. Tuy nhiên, với tư cách là thành
                viên của Chương trình liên kết và vì thông tin của chúng
                tôi được cập nhật thường xuyên, các bạn cần cập nhật Tài
                liệu giới thiệu trên trang web của các bạn để duy trì tính
                nhất quán và chính xác.
                <br />
                (c) Thực hiện và tuân thủ tất cả luật bản quyền: các bạn
                hoàn toàn có trách nhiệm thực hiện và tuân thủ tất cả các
                bản quyền hiện hành và các luật khác liên quan đến trang
                web của các bạn. Chúng tôi không chịu trách nhiệm nếu các
                bạn sử dụng tài liệu có bản quyền của người khác vi phạm
                luật pháp.
                <br />
                (d) Không mời chào các Giảng viên của chúng tôi: Với tư
                cách thành viên của Chương trình liên kết Edunetwork, các
                bạn đồng ý không trực tiếp hoặc gián tiếp, đích thân hoặc
                thay mặt người khác, mời chào doanh nghiệp hoặc gạ gẫm,
                xúi giục, gây ảnh hưởng hoặc khuyến khích bất kỳ Giảng
                viên của chúng tôi tải lên (các) Khóa học Edunetwork của
                họ trên trang web và / hoặc nền tảng của các bạn, hoặc
                thay đổi, chấm dứt hoặc vi phạm mối quan hệ hợp đồng hoặc
                kinh doanh khác của họ với chúng tôi.
                <br />
                4. Trách nhiệm thành viên
                <br />
                Là thành viên của Chương trình liên kết Edunetwork, các
                bạn hiểu và đồng ý rằng:
                <br />
                (a) Chúng tôi có thể giám sát trang web của các bạn: các
                bạn cho phép chúng tôi có quyền giám sát trang web của các
                bạn bất cứ lúc nào để xác định xem các bạn có tuân theo
                các Điều khoản liên kết này hay không và thông báo cho các
                bạn về bất kỳ thay đổi mà chúng tôi cảm thấy các bạn nên
                tuân thủ. Hơn nữa, các bạn phải tuân thủ mọi yêu cầu chúng
                tôi đưa ra để gỡ xuống nội dung cụ thể từ trang web của
                các bạn. Việc không tuân thủ là vi phạm các Điều khoản và
                là căn cứ để chấm dứt tư cách thành viên của các bạn.
                <br />
                (b) Chúng tôi xác định Chính sách cho khách hàng được giới
                thiệu: Những người trở thành khách hàng của Dịch vụ chúng
                tôi thông qua các giới thiệu được đưa ra trong Chương
                trình liên kết Edunetwork sẽ được coi là khách hàng của
                chúng tôi, theo quyết định riêng của Edunetwork. Tất cả
                các điều khoản, quy tắc, chính sách và quy trình hoạt động
                của chúng tôi áp dụng cho Người dùng của chúng tôi sẽ áp
                dụng cho các khách hàng được giới thiệu đó. Chúng tôi có
                thể thay đổi các điều khoản, quy tắc, chính sách và quy
                trình hoạt động của chúng tôi bất cứ lúc nào, như được mô
                tả thêm trong Điều khoản sử dụng và các điều khoản khác
                của chúng tôi mà chúng tôi có thể đăng tùy từng thời điểm.
                <br />
                (c) Các bạn không quảng cáo Edunetwork thông qua mua quảng
                cáo hoặc truyền thông có trả phí dẫn trực tiếp đến trang
                web của Edunetwork (được tìm thấy tại Edunetwork.pro). Các
                bạn không định giá cho các từ khóa mang nhãn hiệu
                Edunetwork với tư cách là thành viên. Điều này áp dụng cho
                tất cả các nền tảng quảng cáo và cho tất cả các thành viên
                trừ khi được chấp thuận trực tiếp từ Edunetwork.
                <br />
                (d) Các bạn không sử dụng tên công ty của chúng tôi hoặc
                các biến thể của tên công ty của chúng tôi trong các tên
                miền hoặc trang truyền thông xã hội của các bạn: các bạn
                không được đăng ký hoặc mua tên miền bao gồm tên công ty
                chúng tôi hoặc bất kỳ lỗi chính tả hoặc biến thể nào của
                tên công ty chúng tôi để chạy các chương trình khuyến mãi
                với tư cách là thành viên. Ngoài ra, các bạn không được sử
                dụng tên Công ty chúng tôi, các biến thể của tên công ty
                chúng tôi, hoặc giao diện của các trang truyền thông xã
                hội riêng của chúng tôi trên bất kỳ trang truyền thông xã
                hội nào (thí dụ Trang Facebook Fan) nơi các bạn chạy các
                chương trình khuyến mãi với tư cách là thành viên.
                <br />
                (e) Các bạn chịu trách nhiệm về nội dung trang web của
                mình: các bạn không được quảng bá nội dung của chúng tôi
                và các khóa học của Giảng viên chúng tôi trên một trang
                web có chứa bất kỳ hình thức gây hiểu lầm, nói xấu, tục
                tĩu, bất hợp pháp, khiêu dâm hoặc bất kỳ nội dung nào khác
                bị coi là xúc phạm và vi phạm pháp luật.
                <br />
                (f) Các bạn không quảng cáo bằng cách sử dụng tạo cookie:
                các bạn không được sử dụng các kỹ thuật tạo cookie hoặc
                trình tạo nhấp chuột để đặt cookie theo dõi mà không có
                người dùng thực sự nhấp vào Liên kết giới thiệu. Các bạn
                không tạo ra các nhấp chuột hoặc hiển thị một cách giả tạo
                trên trang web của mình hoặc tạo các lượt truy cập trên
                trang web Edunetwork, cho dù bằng robot hay chương trình
                phần mềm hay cách khác.
                <br />
                (g) Các bạn sẽ không sao chép lại bằng phương tiện truyền
                thông và nội dung của chúng tôi: Thành viên phải đảm bảo
                rằng phương tiện truyền thông của mình không sao chép hoặc
                giống với giao diện của trang web Edunetwork hoặc tạo ấn
                tượng rằng phương tiện truyền thông của các bạn là một
                phần của trang web của công ty chúng tôi. Các bạn cũng
                hiểu rằng việc sử dụng ngôn ngữ được tìm thấy trên các
                trang của chúng tôi không được phép trừ khi nó mô tả nội
                dung được tìm thấy trên bất kỳ trang đích khóa học cụ thể
                nào.
                <br />
                (h) Các bạn chịu trách nhiệm về việc các bạn sử dụng nội
                dung được tìm thấy trên trang web của chúng tôi. Các bạn
                có thể tạo tài liệu quảng cáo riêng của các bạn bằng cách
                sử dụng các trang từ trang web của chúng tôi làm tài liệu
                tham khảo. Các bạn cũng có thể sử dụng hình ảnh khóa học
                và một phần của văn bản trong các trang của chúng tôi để
                quảng bá sản phẩm một cách chính xác trên trang web của
                các bạn. Tuy nhiên, các bạn KHÔNG được tải xuống, sao chép
                hoặc sử dụng nội dung video (miễn phí hoặc trả phí), tài
                liệu bổ sung khóa học (PDF, câu đố hoặc tài liệu bổ sung)
                hoặc mô tả bài học và tải chúng lên (các) trang web riêng
                của các bạn. Việc vi phạm quy định này có thể dẫn đến việc
                chấm dứt ngay lập tức tài khoản liên kết của các bạn.
                <br />
                (i) Các bạn sẽ không sử dụng phần mềm gián điệp, phần mềm
                độc hại, vi rút và các loại tương tự: các bạn không được
                bao gồm trên trang web, màn hình hiển thị hoặc sử dụng
                Liên kết giới thiệu hoặc Nội dung khác sử dụng bất kỳ phần
                mềm gián điệp, phần mềm độc hại hoặc vi rút hoặc bất kỳ
                ứng dụng phần mềm nào không rõ ràng và phải được sự cho
                phép của người dùng trước khi tải xuống hoặc cài đặt trên
                máy tính của họ hoặc thiết bị điện tử khác.
                <br />
                (j) Các bạn sẽ hợp tác và trung thực về mối quan hệ của
                các bạn với chúng tôi: các bạn không được trình bày sai
                hoặc tô điểm mối quan hệ giữa các bạn và Edunetwork hoặc
                ngụ ý về bất kỳ mối quan hệ hoặc liên kết nào giữa các bạn
                và Edunetwork hoặc bất kỳ cá nhân hoặc tổ chức nào khác
                trừ khi được cho phép rõ ràng theo thỏa thuận liên kết
                này. Các bạn không được tự đại diện với tư cách là đại lý
                hoặc nhân viên của Edunetwork hoặc tuyên bố rằng các bạn
                có quyền ràng buộc Edunetwork trong hợp đồng
                <br />
                (k) Các bạn không thể sử dụng tiện ích mở rộng trình duyệt
                để quảng bá Edunetwork hoặc các khóa học Edunetwork mà
                không có sự chấp thuận trực tiếp từ Edunetwork. Tất cả các
                mã phiếu giảm giá có sẵn trong phần mở rộng phải được
                Edunetwork chấp thuận. Các bạn cũng hiểu và đồng ý rằng
                tiện ích mở rộng trình duyệt của các bạn không thể cho
                phép người dùng tải lên các phiếu giảm giá mới vào nguồn
                cấp dữ liệu của tiện ích mở rộng.
                <br />
                (l) Các bạn sẽ chú ý đến việc các bạn hợp tác với ai: các
                bạn không được sử dụng các phương thức tiếp thị thu hút
                khách hàng giả. Ví dụ, các bạn không thể thuyết phục ai đó
                mua khóa học chỉ để khiến người đó trở thành thành viên
                phụ của các bạn. Chúng tôi, theo quyết định riêng của
                chúng tôi, sẽ đưa ra quyết định cho dù ai đó là khách hàng
                giả.
                <br />
                (m) Các bạn đảm bảo các thành viên phụ tuân theo tất cả
                các điều khoản của chúng tôi: các bạn có quyền làm việc
                với mạng lưới thành viên phụ miễn là các thành viên phụ
                của các bạn tuân theo Điều khoản liên kết của chúng tôi.
                Các bạn hiểu rằng các bạn chịu trách nhiệm về việc tuân
                thủ các điều khoản này bởi các thành viên phụ của các bạn
                và việc bất kỳ thành viên phụ nào của các bạn không tuân
                thủ các điều khoản này có thể dẫn đến việc chấm dứt tài
                khoản liên kết của các bạn.
                <br />
                (n) Đối với nhân viên của Edunetwork cũng là Thành viên
                của Edunetwork: các bạn sẽ nói rõ rằng các bạn là nhân
                viên của Edunetwork khi quảng bá Edunetwork với tư cách là
                thành viên. Là nhân viên của Edunetwork, các bạn đồng ý
                nêu rõ trong tất cả các bài đăng quảng cáo hoặc chương
                trình khuyến mãi có chứa các liên kết thành viên của
                Edunetwork, nhân viên của các bạn và mối quan hệ liên kết
                với Edunetwork thông qua tuyên bố miễn trừ trách nhiệm.
                Các yêu cầu cụ thể và ví dụ cho các Thành viên của
                Edunetwork cũng là nhân viên của Edunetwork, có thể tìm
                thấy ở đây.
                <br />
                Các Điều khoản liên kết này sẽ bắt đầu và có hiệu lực khi
                chúng tôi chấp nhận Đơn đăng ký của các bạn.
                <br />
                5. Hoa hồng liên kết
                <br />
                (a) Đủ điều kiện: Ngoại trừ các khu vực pháp lý không được
                phép giao dịch như vậy, các bạn đủ điều kiện để nhận hoa
                hồng liên kết thông qua Giới thiệu (theo định nghĩa trong
                phần (i) bên dưới) trong thời hạn của Điều khoản liên kết
                này, theo cách tính được mô tả bên dưới.
                <br />
                (b) Số tiền phải trả: Số tiền hoa hồng liên kết chính xác
                phải trả cho các bạn sẽ được tính theo cách sau: Hoa hồng
                liên kết được thiết lập theo các chương trình ưu đãi cho
                các bạn trong tài khoản Liên kết. "Khách hàng giới thiệu”
                là khách hàng thanh toán dịch vụ của chúng thông qua việc
                sử dụng Tài liệu giới thiệu mà các bạn giới thiệu. Việc
                chấp nhận khách hàng giới thiệu với tư cách là người dùng
                dịch vụ sẽ do chúng tôi quyết định.
                <br />
                (c) Các khoản thanh toán hoa hồng liên kết sẽ được thực
                hiện theo yêu cầu của các bạn. Các khoản thanh toán được
                thực hiện theo phương thức thanh toán mà các bạn đã chọn
                trong tài khoản liên kết của mình. Nếu tài khoản của các
                bạn bị chấm dứt do vi phạm các Điều khoản liên kết này,
                chúng tôi có quyền giữ lại tất cả các khoản thanh toán
                trong tương lai của các bạn.
                <br />
                (d) Các khoản thanh toán liên kết được gửi cho các bạn qua
                hệ thống thanh toán đối tác của chúng tôi. Edunetwork
                không gửi thanh toán trực tiếp cho bất cứ thành viên nào.
                Các thành viên chịu trách nhiệm đảm bảo rằng họ có thể
                chấp nhận thanh toán từ mạng lưới liên kết của Edunetwork.
                <br />
                (e) Các thành viên chịu trách nhiệm về bất kỳ và tất cả
                các khoản phí, lệ phí, thuế, tỷ giá hối đoái, phụ phí và
                các chi phí khác phát sinh để nhận các khoản thanh toán
                liên kết. Vui lòng kiểm tra với tổ chức ngân hàng nhận
                tiền của các bạn để tìm hiểu xem có bất kỳ điều nào áp
                dụng cho tài khoản của các bạn không.
                <br />
                (f) Nếu chúng tôi xác định rằng việc thanh toán hoa hồng
                liên kết cho các bạn trong bất kỳ khu vực tài phán nào là
                bất hợp pháp theo bất kỳ luật nào, thì chúng tôi có thể
                bảo lưu quyền không trả hoa hồng liên kết cho bất kỳ doanh
                số nào được thực hiện trong khu vực tài phán đó.
                <br />
                (g) Chúng tôi có thể giữ lại khoản thanh toán cuối cùng
                của các bạn trong một thời gian hợp lý để đảm bảo rằng số
                tiền chính xác được trả cho các bạn.
                <br />
                (h) Nếu tại bất kỳ thời điểm nào không có hoạt động đáng
                kể nào trên tài khoản của các bạn trong 01 năm, thì chúng
                tôi sẽ có quyền giữ lại mọi khoản phí lũy kế. Ngoài ra,
                bất kỳ khoản phí chưa thanh toán trong tài khoản của các
                bạn có thể bị sung công theo luật hiện hành.
                <br />
                6. Giấy phép
                <br />
                (a) Các bạn cấp cho chúng tôi quyền không độc quyền, không
                thể chuyển nhượng, có thể hủy ngang để sử dụng tên, tiêu
                đề và logo của các bạn trong quảng cáo, tiếp thị, quảng bá
                và công khai dưới bất kỳ hình thức nào về các quyền của
                chúng tôi theo Điều khoản liên kết này. Tuy nhiên, chúng
                tôi không có nghĩa vụ quảng cáo, tiếp thị, quảng bá hoặc
                công khai.
                <br />
                (b) Cả hai chúng ta đồng ý không sử dụng các tài liệu độc
                quyền của người khác theo bất kỳ cách nào gây mất uy tín
                hoặc nói cách khác là miêu tả người khác theo cách thức
                tiêu cực. Mỗi chúng ta có tất cả các quyền tương ứng của
                chúng ta trong các tài liệu độc quyền được điều chỉnh bởi
                giấy phép này. Một trong chúng ta có thể thu hồi giấy phép
                này bất cứ lúc nào bằng cách gửi thông báo bằng văn bản
                chấm dứt sự tham gia của chúng tôi theo các Điều khoản
                liên kết này và chấm dứt tư cách thành viên của các bạn.
                Ngoài giấy phép được cấp trong các Điều khoản liên kết
                này, mỗi chúng ta đều có quyền, quyền sở hữu và quyền lợi
                đối với các quyền tương ứng của chúng ta và không có
                quyền, quyền sở hữu hoặc quyền lợi nào được chuyển cho bên
                kia.
                <br />
                7. Miễn trừ trách nhiệm
                <br />
                CHÚNG TÔI KHÔNG TUYÊN BỐ HAY BẢO ĐẢM RÕ RÀNG HAY NGỤ Ý VỀ
                EDUNETWORK. BẤT KỲ BẢO ĐẢM NGỤ Ý VỀ TÍNH THƯƠNG MẠI, TÍNH
                PHÙ HỢP CHO MỘT MỤC ĐÍCH CỤ THỂ, TÍNH CHÍNH XÁC, ĐỘ TIN
                CẬY VÀ KHÔNG VI PHẠM ĐỀU BỊ TỪ CHỐI VÀ LOẠI TRỪ RÕ RÀNG.
                NGOÀI RA, CHÚNG TÔI KHÔNG TUYÊN BỐ RẰNG HOẠT ĐỘNG CỦA
                TRANG WEB CỦA CHÚNG TÔI SẼ KHÔNG BỊ GIÁN ĐOẠN HOẶC KHÔNG
                CÓ LỖI VÀ CHÚNG TÔI KHÔNG CHỊU TRÁCH NHIỆM VỀ HẬU QUẢ CỦA
                BẤT KỲ GIÁN ĐOẠN HOẶC LỖI NÀO.
                <br />
                8. Hạn chế trách nhiệm pháp lý
                <br />
                CHÚNG TÔI SẼ KHÔNG CHỊU TRÁCH NHIỆM VỚI CÁC BẠN VỀ BẤT KỲ
                VẤN ĐỀ NÀO TRONG CÁC ĐIỀU KHOẢN LIÊN KẾT NÀY THEO BẤT KỲ
                HỢP ĐỒNG, SƠ SUẤT, TRÁCH NHIỆM D N SỰ, TRÁCH NHIỆM PHÁP LÝ
                HOẶC LÝ THUYẾT CÔNG BẰNG HOẶC HỢP PHÁP KHÁC ĐỐI VỚI MỌI
                THIỆT HẠI GIÁN TIẾP, NGẪU NHIÊN, DO HẬU QUẢ, ĐẶC BIỆT HOẶC
                LÀM GƯƠNG (BAO GỒM, KHÔNG GIỚI HẠN, MẤT DOANH THU HOẶC UY
                TÍN HOẶC LỢI NHUẬN DỰ KIẾN HOẶC KINH DOANH BỊ LỖ), NGAY CẢ
                KHI CÁC BẠN ĐÃ ĐƯỢC THÔNG BÁO VỀ KHẢ NĂNG THIỆT HẠI ĐÓ.
                NGOÀI RA, BẤT KỂ ĐIỀU GÌ TRÁI NGƯỢC VỚI CÁC ĐIỀU KHOẢN
                LIÊN KẾT NÀY, TRONG MỌI TRƯỜNG HỢP, CHÚNG TÔI SẼ KHÔNG
                CHỊU TRÁCH NHIỆM TÍCH LŨY ĐỐI VỚI CÁC BẠN PHÁT SINH HOẶC
                LIÊN QUAN ĐẾN CÁC ĐIỀU KHOẢN LIÊN KẾT NÀY, CHO DÙ DỰA TRÊN
                HỢP ĐỒNG, SƠ SUẤT, TRÁCH NHIỆM PHÁP LÝ, TRÁCH NHIỆM D N SỰ
                HOẶC LÝ THUYẾT CÔNG BẰNG HOẶC HỢP PHÁP KHÁC, VƯỢT QUÁ TỔNG
                PHÍ GIỚI THIỆU ĐƯỢC TRẢ CHO CÁC BẠN THEO ĐIỀU KHOẢN LIÊN
                KẾT NÀY.
                <br />
                9. Bồi thường
                <br />
                Các bạn đồng ý bồi thường và tránh tổn hại cho Edunetwork,
                nhân viên, đại diện, đại lý và chi nhánh của Edunetwork,
                đối với mọi khiếu nại, vụ kiện, kiện tụng hoặc các thủ tục
                tố tụng khác để kiện họ dựa trên hoặc phát sinh từ bất kỳ
                khiếu nại do các bạn vi phạm Điều khoản liên kết này. Các
                bạn sẽ trả bất kỳ và tất cả chi phí, thiệt hại và lệ phí,
                bao gồm, nhưng không giới hạn, phí luật sư hợp lý và các
                chi phí được quy định hoặc gánh chịu bởi chúng tôi hoặc
                liên quan hoặc phát sinh từ bất kỳ khiếu nại, vụ kiện,
                kiện tụng hoặc thủ tục tố tụng nào như vậy.
                <br />
                10. Chấm dứt
                <br />
                Edunetwork hoặc các bạn có thể chấm dứt việc tham gia của
                chúng tôi theo các Điều khoản liên kết này: Chúng tôi hoặc
                các bạn có thể kết thúc các Điều khoản liên kết này BẤT CỨ
                LÚC NÀO, có hoặc không có lý do, bằng cách thông báo bằng
                văn bản cho bên kia. Thông báo bằng văn bản có thể ở dạng
                thư, email hoặc fax.
                <br />
                11. Sửa đổi
                <br />
                Tùy từng thời điểm, chúng tôi có thể cập nhật các Điều
                khoản này để làm rõ các yêu cầu của chúng tôi hoặc để phản
                ánh các yêu cầu mới hoặc khác, chẳng hạn như chúng tôi có
                thể thay đổi phạm vi Phí Giới thiệu, quy trình thanh toán,
                và quy tắc chương trình Liên kết, hoặc các Tiêu chuẩn Giới
                thiệu và Edunetwork có toàn quyền quyết định sửa đổi và /
                hoặc thay đổi Điều khoản liên kết này bất cứ lúc nào, theo
                quyết định của chúng tôi. Nếu chúng tôi thực hiện bất kỳ
                thay đổi quan trọng nào đối với các điều khoản liên kết
                này, các bạn sẽ tự động nhận được email thông báo cho các
                bạn rằng các thay đổi đã được thực hiện và nhắc các bạn
                đồng ý với Điều khoản liên kết mới của chúng tôi hay
                không. Việc sửa đổi sẽ có hiệu lực vào ngày đăng trừ khi
                có quy định khác. Nếu có bất kỳ sửa đổi nào mà các bạn
                không thể chấp nhận, tùy chọn duy nhất của các bạn là chấm
                dứt tham gia vào Chương trình liên kết. Việc các bạn tiếp
                tục truy cập vào nền tảng Linkshare của chúng tôi sẽ được
                xem là các bạn đã chấp nhận Điều khoản liên kết được cập
                nhật của chúng tôi. Các bạn nên truy cập Dịch vụ thường
                xuyên để đảm bảo các bạn biết về bất kỳ thay đổi nào đối
                với Điều khoản liên kết, vì mọi Điều khoản liên kết được
                sửa đổi sẽ thay thế tất cả các Điều khoản liên kết trước
                đó.
                <br />
                12. Các điều khoản khác
                <br />
                (a) Các bạn tuyên bố và bảo đảm với chúng tôi rằng:
                <br />
                (i) Các Điều khoản liên kết này cấu thành nghĩa vụ pháp
                lý, hợp lệ và ràng buộc của các bạn, có thể được thi hành
                đối với các bạn theo các điều khoản và điều kiện được quy
                định ở đây;
                <br />
                (ii) Các bạn có toàn quyền, quyền hạn và thẩm quyền để
                chấp nhận và bị ràng buộc bởi các Điều khoản liên kết này
                và thực hiện nghĩa vụ của các bạn theo các Điều khoản liên
                kết này, mà không cần sự chấp thuận hoặc đồng ý của bất kỳ
                bên nào khác;
                <br />
                (iii) Các bạn có toàn quyền, quyền sở hữu và quyền lợi đối
                với các quyền được cấp cho chúng tôi trong các Điều khoản
                liên kết này; và,
                <br />
                (iv) BẠN ĐÃ ĐỌC VÀ XEM XÉT GIỚI HẠN TRÁCH NHIỆM PHÁP LÝ VÀ
                CÁC QUY ĐỊNH MIỄN TRỪ TRÁCH NHIỆM CỦA ĐIỀU KHOẢN LIÊN KẾT
                NÀY TRƯỚC KHI CHẤP NHẬN ĐIỀU KHOẢN LIÊN KẾT NÀY.
                <br />
                (b) Nhà thầu độc lập. Mỗi chúng ta sẽ được coi là nhà thầu
                độc lập liên quan đến chủ thể của các Điều khoản liên kết
                này và không có nội dung nào trong các Điều khoản liên kết
                này sẽ được coi là hoặc được hiểu theo bất kỳ cách nào như
                tạo ra bất kỳ quan hệ đối tác, liên doanh, việc làm, đại
                lý, ủy thác nào, hoặc mối quan hệ tương tự khác. Các bạn
                không đưa ra bất kỳ tuyên bố nào, cho dù trên trang web
                của các bạn hay nói cách khác, mâu thuẫn hoặc có thể mâu
                thuẫn bất cứ điều gì trong phần này.
                <br />
                (c) Khả năng chuyển nhượng. Các bạn không được chuyển
                nhượng quyền hoặc nghĩa vụ của mình theo các Điều khoản
                liên kết này cho bất kỳ bên nào và mọi nỗ lực để làm như
                vậy sẽ bị vô hiệu và không có hiệu lực. Chúng tôi được tự
                do chuyển nhượng các Điều khoản liên kết này.
                <br />
                (d) Luật điều chỉnh. Các Điều khoản liên kết này sẽ được
                điều chỉnh theo luật pháp Singapore mà không tham chiếu
                đến lựa chọn hoặc các mâu thuẫn nguyên tắc luật pháp cần
                áp dụng luật pháp tại khu vực tài phán khác, và được coi
                là đã lập và chấp nhận tại Singapore. Bất kỳ tranh chấp có
                thể phát sinh liên quan đến các Điều khoản liên kết này sẽ
                được giải quyết theo Điều khoản sử dụng của chúng tôi.
                <br />
                (e) Các bạn không được sửa đổi hoặc từ bỏ bất kỳ điều
                khoản nào của các Điều khoản liên kết này trừ khi bằng văn
                bản và có chữ ký của cả hai bên.
                <br />
                (f) Toàn bộ thỏa thuận. Các Điều khoản liên kết này thể
                hiện toàn bộ thỏa thuận giữa chúng tôi và các bạn, và sẽ
                thay thế tất cả các thỏa thuận và liên lạc trước đó giữa
                chúng ta, bằng lời nói hoặc bằng văn bản.
                <br />
                (g) Tiêu đề và tựa đề. Các tiêu đề và tựa đề trong Điều
                khoản liên kết này chỉ được đưa vào nhằm thuận tiện và
                không giới hạn hoặc ảnh hưởng đến các điều khoản này.
                <br />
                (h) Hiệu lực từng phần. Nếu có bất kỳ điều khoản nào trong
                các Điều khoản liên kết này được coi là không hợp lệ hoặc
                không thể thi hành, điều khoản đó sẽ bị loại bỏ hoặc bị
                giới hạn trong phạm vi tối thiểu cần thiết theo ý định của
                cả hai bên để giữ hiệu lực và các điều khoản còn lại của
                Điều khoản liên kết này vẫn có hiệu lực đầy đủ.
                <br />
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

export default connect(null, mapDispatchToProps)(PrivacyPolicy);
