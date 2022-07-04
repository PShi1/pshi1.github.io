import React from "react";

export const cursorDefaultColor = "250, 250, 250";
export const cursorInnerDefaultOpacity = 1;
export const cursorOuterDefaultOpacity = 0.4;
export const cursorLightModeColor = "0, 0, 0";
export const cursorLightModeInnerOpacity = 1;
export const cursorLightModeOuterOpacity = 0.2;

export function AnimatedCursor({
                                 color = cursorDefaultColor,
                                 outerAlpha = cursorOuterDefaultOpacity,
                                 innerSize = 0.6,
                                 outerSize = 0.6,
                                 outerScale = 4,
                                 innerScale = 1,
                               }) {
  const cursorOuterRef = React.useRef()
  const cursorInnerRef = React.useRef()
  const requestRef = React.useRef()
  const previousTimeRef = React.useRef()
  const [coords, setCoords] = React.useState({x: 0, y: 0})
  const [isVisible, setIsVisible] = React.useState(true)
  const [isActive, setIsActive] = React.useState(false)
  const [isActiveClickable, setIsActiveClickable] = React.useState(false)
  let endX = React.useRef(0)
  let endY = React.useRef(0)

  const onMouseMove = React.useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY })
    cursorInnerRef.current.style.top = clientY + 'px'
    cursorInnerRef.current.style.left = clientX + 'px'
    endX.current = clientX
    endY.current = clientY
  }, [])

  const animateOuterCursor = React.useCallback(
    (time) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x)
        coords.y += (endY.current - coords.y)
        cursorOuterRef.current.style.top = coords.y + 'px'
        cursorOuterRef.current.style.left = coords.x + 'px'
      }
      previousTimeRef.current = time
      requestRef.current = requestAnimationFrame(animateOuterCursor)
    },
    [requestRef] // eslint-disable-line
  )

  React.useEffect(() => requestRef.current = requestAnimationFrame(animateOuterCursor), [animateOuterCursor])

  const onMouseDown  = React.useCallback(() => setIsActive(true), [])
  const onMouseUp    = React.useCallback(() => setIsActive(false), [])
  const onMouseEnter = React.useCallback(() => setIsVisible(true), [])
  const onMouseLeave = React.useCallback(() => setIsVisible(false), [])

  useEventListener('mousemove', onMouseMove, document)
  useEventListener('mousedown', onMouseDown, document)
  useEventListener('mouseup', onMouseUp, document)
  useEventListener('mouseenter', onMouseEnter, document)
  useEventListener('mouseleave', onMouseLeave, document)

  React.useEffect(() => {
    if (isActive) {
      cursorInnerRef.current.style.transform = `scale(${innerScale})`
      cursorOuterRef.current.style.transform = `scale(${outerScale})`
    } else {
      cursorInnerRef.current.style.transform = 'scale(1)'
      cursorOuterRef.current.style.transform = 'scale(1)'
    }
  }, [innerScale, outerScale, isActive])

  React.useEffect(() => {
    if (isActiveClickable) {
      cursorInnerRef.current.style.transform = `scale(${innerScale * 1.3})`
      cursorOuterRef.current.style.transform = `scale(${outerScale * 1.4})`
    }
  }, [innerScale, outerScale, isActiveClickable])

  React.useEffect(() => {
    if (isVisible) {
      cursorInnerRef.current.style.opacity = 1
      cursorOuterRef.current.style.opacity = 1
    } else {
      cursorInnerRef.current.style.opacity = 0
      cursorOuterRef.current.style.opacity = 0
    }
  }, [isVisible])

  React.useEffect(() => {
    const clickables = document.querySelectorAll(
      'a, input[type="submit"], input[type="image"], label[for], select, button, .link, .cards-div, .tag-container, .scroll-down, .footer-icon, .collapsible-header, .hover-cursor, .group, .subgroup, .clickable, .confetti-hover'
    )

    const mouseoverCallback = (l) => {
      setIsActive(true)
      if (l?.target?.className?.includes("invert-target") && cursorInnerRef.current.style.mixBlendMode !== "difference") {
        cursorInnerRef.current.style.mixBlendMode = "difference";
        cursorOuterRef.current.style.mixBlendMode = "difference";
      }
    };

    const clickCallback = () => {
      setIsActive(true);
      setIsActiveClickable(false);
    }

    const mousedownCallback = () => {
      setIsActiveClickable(true);
    }

    const mouseupCallback = () => {
      setIsActive(true)
    }

    const mouseoutCallback = (l) => {
      setIsActive(false)
      setIsActiveClickable(false)
      if (l?.target?.className?.includes("invert-target") && cursorInnerRef.current.style.mixBlendMode !== "normal") {
        cursorInnerRef.current.style.mixBlendMode = "normal";
        cursorOuterRef.current.style.mixBlendMode = "normal";
      }
    }

    clickables.forEach((el) => {
      el.style.cursor = 'none'

      el.addEventListener('mouseover', mouseoverCallback)
      el.addEventListener('click', clickCallback)
      el.addEventListener('mousedown', mousedownCallback)
      el.addEventListener('mouseup', mouseupCallback)
      el.addEventListener('mouseout', mouseoutCallback)
    })

    return () => {
      clickables.forEach((el) => {
        el.removeEventListener('mouseover', mouseoverCallback);
        el.removeEventListener('click', clickCallback)
        el.removeEventListener('mousedown', mousedownCallback)
        el.removeEventListener('mouseup', mouseupCallback)
        el.removeEventListener('mouseout', mouseoutCallback)
      })
    }
  }, [isActive])

  const styles = {
    cursor: {
      position: 'fixed',
      opacity: 1,
      pointerEvents: 'none',
      transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out'
    },
    cursorInner: {
      zIndex: 9999500,
      position: 'fixed',
      borderRadius: '50%',
      width: innerSize + "vw",
      height: innerSize + "vw",
      pointerEvents: 'none',
      backgroundColor: `rgba(${color}, 1)`,
      transition: 'opacity 0.15s ease-in-out, transform 0.25s ease-in-out',
      mixBlendMode: 'normal',
    },
    cursorOuter: {
      zIndex: 9999499,
      position: 'fixed',
      borderRadius: '50%',
      pointerEvents: 'none',
      width: outerSize + "vw",
      height: outerSize + "vw",
      backgroundColor: `rgba(${color}, ${outerAlpha})`,
      transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',
      mixBlendMode: 'normal',
    }
  }

  return (
    <React.Fragment>
      <div ref={cursorOuterRef} style={styles.cursorOuter} id="outer-cursor"/>
      <div ref={cursorInnerRef} style={styles.cursorInner} id="inner-cursor"/>
    </React.Fragment>
  )
}

function useEventListener(eventName, handler, element = document) {
  const savedHandler = React.useRef()

  React.useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  React.useEffect(() => {
    const isSupported = element && element.addEventListener
    if (!isSupported) return

    const eventListener = (event) => savedHandler.current(event)

    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}
// End Cursor Testing