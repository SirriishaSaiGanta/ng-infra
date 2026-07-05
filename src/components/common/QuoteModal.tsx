import Modal from './Modal'
import QuoteForm from './QuoteForm'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Request a Quote">
      <QuoteForm />
    </Modal>
  )
}

export default QuoteModal
