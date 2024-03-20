interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '王磊的户外跑',
  siteUrl: 'https://wl2279.github.io/run2.0/',
  logo: 'https://pica.zhimg.com/fab23f1bb7896e64aeb114a203b30996_l.jpg?source=32738c0c',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'R.I.P',
      url: 'https://mp.weixin.qq.com/s/34HL50MamcRVO-yMaPWonw',
    },
    {
      name: 'About',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
