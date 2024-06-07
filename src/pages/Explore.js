import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Explore.module.css";

const Explore = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMenuButtonItemIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/messenger");
  }, [navigate]);

  return (
    <div className={styles.explore}>
      <div className={styles.explorebody}>
        <div className={styles.content}>
          <div className={styles.content1}>
            <div className={styles.smalPost}>
              <div className={styles.smallPost}>
                <div className={styles.icon}>
                  <img className={styles.icon1} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.smalPost1}>
              <div className={styles.smallPost1}>
                <div className={styles.icon}>
                  <img className={styles.icon1} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.smalPost2}>
              <div className={styles.smallPost2}>
                <div className={styles.icon}>
                  <img className={styles.icon1} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.smalPost3}>
              <div className={styles.smallPost3}>
                <div className={styles.icon}>
                  <img className={styles.icon1} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.smalPost4}>
              <div className={styles.smallPost}>
                <div className={styles.icon}>
                  <img className={styles.icon1} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.smalPost5}>
              <div className={styles.smallPost5}>
                <div className={styles.icon}>
                  <img className={styles.icon1} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.smalPost6}>
              <div className={styles.smallPost6}>
                <div className={styles.icon}>
                  <img className={styles.icon1} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.smalPost7}>
              <div className={styles.smallPost1}>
                <div className={styles.icon}>
                  <img className={styles.icon1} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.smalPost8}>
              <div className={styles.smallPost8}>
                <div className={styles.icon}>
                  <img className={styles.icon1} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.smalPost9}>
              <div className={styles.smallPost9}>
                <div className={styles.icon}>
                  <img className={styles.icon1} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.smalPost10}>
              <div className={styles.smallPost2}>
                <div className={styles.icon}>
                  <img className={styles.icon1} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.bigPost}>
              <div className={styles.bigPost1}>
                <div className={styles.icon}>
                  <img className={styles.icon23} alt="" src="/icon2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navigations}>
        <div className={styles.navigations1}>
          <div className={styles.navigations2}>
            <div className={styles.logo} onClick={onLogoContainerClick}>
              <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
            </div>
            <div className={styles.search}>
              <div className={styles.searchBox}>
                <div className={styles.search1}>
                  <div className={styles.icon24}>
                    <img
                      className={styles.iconssearch}
                      alt=""
                      src="/iconssearch.svg"
                    />
                  </div>
                  <div className={styles.text}>
                    <div className={styles.search2}>Search</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.menuButton}>
              <img
                className={styles.menuButtonItemIcon}
                alt=""
                src="/menubuttonitem.svg"
                onClick={onMenuButtonItemIconClick}
              />
              <div className={styles.menuButtonItem}>
                <div className={styles.iconsmessenger}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector.svg"
                    onClick={onVectorIconClick}
                  />
                </div>
              </div>
              <img
                className={styles.menuButtonItem}
                alt=""
                src="/menubuttonitem2.svg"
              />
              <div className={styles.menuButtonItem}>
                <img
                  className={styles.iconsmessenger}
                  alt=""
                  src="/iconsfindpeople.svg"
                />
              </div>
              <img
                className={styles.menuButtonItem}
                alt=""
                src="/menubuttonitem4.svg"
              />
              <img
                className={styles.menuButtonItemIcon3}
                alt=""
                src="/menubuttonitem5@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer1}>
          <div className={styles.footer2}>
            <div className={styles.footerTop}>
              <div className={styles.footerItem}>
                <div className={styles.meta}>Meta</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>About</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>Blog</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>jobs</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>Help</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>API</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>privacy</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>terms</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>top accounts</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>hashtags</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>locations</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>ınstagram lite</div>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <div className={styles.footerItem}>
                <div className={styles.text}>
                  <div className={styles.meta}>English</div>
                </div>
                <div className={styles.icon25}>
                  <img
                    className={styles.iconsarrow}
                    alt=""
                    src="/iconsarrow@2x.png"
                  />
                </div>
              </div>
              <div className={styles.footerItem13}>
                <div className={styles.meta}>© 2021 Instagram from Meta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.border} />
    </div>
  );
};

export default Explore;
