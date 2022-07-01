function NewJsxFile() {
  return (
    // @ts-expect-error className issue
    <div className="jsx-file-wrapper">
      New JSX File
    </div>
  )
}

export default NewJsxFile
