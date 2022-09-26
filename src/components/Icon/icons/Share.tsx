import React from 'react'

export const Share = (props: React.SVGProps<SVGSVGElement>) => {
  return (
<<<<<<< HEAD
    <svg width='100%' height='100%' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
=======
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      stroke='currentColor'
      {...props}
    >
>>>>>>> 72ec053f80d6a1cd366225096aeaaccae7171751
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.3549 20.1C18.8709 20.1 20.0999 18.871 20.0999 17.355C20.0999 15.839 18.8709 14.61 17.3549 14.61C15.8389 14.61 14.6099 15.839 14.6099 17.355C14.6099 18.871 15.8389 20.1 17.3549 20.1ZM20.9999 17.355C20.9999 19.3681 19.368 21 17.3549 21C15.3418 21 13.7099 19.3681 13.7099 17.355C13.7099 15.3419 15.3418 13.71 17.3549 13.71C19.368 13.71 20.9999 15.3419 20.9999 17.355Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.4987 16.9024L9.09873 14.2024L9.50122 13.3974L14.9012 16.0974L14.4987 16.9024Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.59275 14.6998H6.60045C7.13444 14.6998 7.65645 14.5415 8.10045 14.2448C8.54445 13.9482 8.89051 13.5265 9.09486 13.0331C9.29921 12.5398 9.35268 11.9969 9.2485 11.4732C9.14432 10.9495 8.88718 10.4684 8.50959 10.0908C8.13199 9.71319 7.65091 9.45605 7.12718 9.35187C6.60344 9.24769 6.06058 9.30116 5.56723 9.50551C5.07388 9.70986 4.65221 10.0559 4.35554 10.4999C4.05887 10.9439 3.90052 11.4659 3.90052 11.9999H3.00052C3.00052 11.2879 3.21165 10.5919 3.60721 9.99991C4.00278 9.4079 4.56501 8.94649 5.22281 8.67402C5.88061 8.40155 6.60444 8.33026 7.30276 8.46917C8.00108 8.60807 8.64252 8.95093 9.14598 9.45439C9.64944 9.95785 9.9923 10.5993 10.1312 11.2976C10.2701 11.9959 10.1988 12.7198 9.92635 13.3776C9.65388 14.0354 9.19247 14.5976 8.60046 14.9931C8.00846 15.3887 7.31245 15.5998 6.60045 15.5998C6.12546 15.608 5.6537 15.5204 5.21326 15.3424C4.77283 15.1643 4.37274 14.8995 4.03682 14.5635C3.70091 14.2276 3.43604 13.8275 3.258 13.3871C3.07996 12.9467 2.9924 12.4749 3.00052 11.9999L3.90039 12.0153C3.89433 12.3695 3.95963 12.7214 4.09241 13.0498C4.22518 13.3783 4.42271 13.6766 4.67322 13.9271C4.92373 14.1777 5.2221 14.3752 5.55056 14.508C5.87901 14.6407 6.23084 14.706 6.58506 14.7L6.59275 14.6998Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.9012 7.90244L9.50122 10.6024L9.09873 9.79745L14.4987 7.09746L14.9012 7.90244Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.3477 9.29949L17.3553 9.29962C17.891 9.30855 18.4173 9.15783 18.8672 8.86664C19.317 8.57545 19.6701 8.15696 19.8813 7.66445C20.0926 7.17193 20.1525 6.62768 20.0535 6.10099C19.9545 5.5743 19.7009 5.08901 19.3252 4.7069C18.9495 4.32479 18.4686 4.06314 17.9437 3.95527C17.4188 3.84739 16.8737 3.89817 16.3778 4.10113C15.8819 4.30409 15.4575 4.65005 15.1588 5.09499C14.8601 5.53992 14.7006 6.0637 14.7005 6.59962L13.8005 6.5995C13.8006 5.88495 14.0133 5.1866 14.4116 4.59335C14.8099 4.00011 15.3756 3.5388 16.0369 3.26818C16.6982 2.99756 17.425 2.92986 18.1249 3.0737C18.8248 3.21754 19.466 3.56641 19.967 4.0759C20.4679 4.58538 20.8059 5.23244 20.938 5.93467C21.07 6.63691 20.9901 7.36256 20.7085 8.01924C20.4268 8.67591 19.9561 9.2339 19.3562 9.62217C18.7564 10.0104 18.0547 10.2114 17.3403 10.1995C16.8703 10.1996 16.4051 10.106 15.9717 9.9244C15.5382 9.74276 15.1453 9.47663 14.8158 9.14153C14.4863 8.80643 14.2269 8.40907 14.0525 7.97263C13.8782 7.53618 13.7925 7.0694 13.8005 6.5995L14.7005 6.59962C14.6946 6.95007 14.7583 7.31331 14.8883 7.6388C15.0183 7.96429 15.2118 8.26062 15.4576 8.51053C15.7033 8.76043 15.9963 8.95889 16.3195 9.09435C16.6427 9.22981 16.9897 9.29954 17.3401 9.29949L17.3477 9.29949Z'
        fill='currentColor'
      />
    </svg>
  )
}
